import { LiveWebSocketResponse, WebSocketEvent } from '../utils';
import WebSocket from 'isomorphic-ws';
import { THERUN_LIVEAPI_URL } from '../constants';

export class LiveWebSocket {
	private _websocket: WebSocket;

	/**
	 * Used to fire events when the WebSocket connection opens. There's no difference between
	 * this and the method provided by WebSocket - this is only here for your convenience.
	 */
	public onOpen: WebSocketEvent<void> | undefined = undefined;

	/**
	 * Used to fire events when the WebSocket connection closes. There's no difference between
	 * this and the method provided by WebSocket - this is only here for your convenience.
	 */
	public onClose: WebSocketEvent<void> | undefined = undefined;

	/**
	 * Used to handle a message received by the WebSocket connection.
	 * The only difference between using this and the methods provided by WebSocket
	 * is this method will ensure the WebSocket response is parsed and typed properly.
	 * @example
	 * const ws = new LiveWebSocket();
	 *
	 * ws.onMessage = (data) => {
	 *   console.log(data.user); // Data is automatically parsed and assigned the proper type
	 * }
	 */
	public onMessage: WebSocketEvent<LiveWebSocketResponse> | undefined =
		undefined;

	/**
	 * Used to fire events when the WebSocket connection encounters an error. There's no difference between
	 * this and the method provided by WebSocket - this is only here for your convenience.
	 */
	public onError: WebSocketEvent<WebSocket.ErrorEvent> | undefined = undefined;

	/**
	 * Initializes a new instance of the LiveWebSocket object
	 * @param {string} [username] Username to listen to
	 */
	constructor(username?: string) {
		this._websocket = new WebSocket(
			`${THERUN_LIVEAPI_URL}${username ? `?username=${username}` : ''}`
		);

		this._websocket.onopen = () =>
			this.onOpen
				? this.onOpen()
				: console.info(
						`WebSocket connection to TheRun's Live API established.`
				  );
		this._websocket.onclose = () =>
			this.onClose
				? this.onClose()
				: console.info(`WebSocket connection to TheRun's Live API closed.`);
		this._websocket.onmessage = (data: WebSocket.MessageEvent) => {
			if (this.onMessage) {
				this.onMessage(
					JSON.parse(data.data as string) as LiveWebSocketResponse
				);
			}
		};
		this._websocket.onerror = (e: WebSocket.ErrorEvent) =>
			this.onError ? this.onError(e) : console.error(e.message);
	}

	/**
	 * Returns the current WebSocket connection
	 */
	get connection() {
		return this._websocket;
	}
}
