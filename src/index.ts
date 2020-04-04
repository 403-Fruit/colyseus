import Clock, { Delayed } from '@gamestdio/timer';

// Core classes
export { Server } from './Server';
export { Room } from './Room';
export { Client, Protocol } from './Protocol';
export { RegisteredHandler, SortOptions } from './matchmaker/RegisteredHandler';

// MatchMaker
import * as matchMaker from './MatchMaker';
export { matchMaker };
export { updateLobby, subscribeLobby } from './matchmaker/Lobby';

// Presence
export { Presence } from './presence/Presence';
export { LocalPresence } from './presence/LocalPresence';
export { RedisPresence } from './presence/RedisPresence';

// Serializers
export { FossilDeltaSerializer } from './serializer/FossilDeltaSerializer';
export { SchemaSerializer } from './serializer/SchemaSerializer';

// Utilities
export { Clock, Delayed };
export { nonenumerable as nosync } from 'nonenumerable';
export { generateId, Deferred } from './Utils';

// Default rooms
export { LobbyRoom } from './rooms/LobbyRoom';
export { RelayRoom } from './rooms/RelayRoom';
