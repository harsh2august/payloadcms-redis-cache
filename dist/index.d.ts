import * as _redis_client from '@redis/client';
import * as _redis_bloom_dist_lib_commands_top_k_RESERVE from '@redis/bloom/dist/lib/commands/top-k/RESERVE';
import * as _redis_bloom_dist_lib_commands_top_k_INFO from '@redis/bloom/dist/lib/commands/top-k/INFO';
import * as _redis_bloom_dist_lib_commands_top_k_INCRBY from '@redis/bloom/dist/lib/commands/top-k/INCRBY';
import * as _redis_bloom_dist_lib_commands_t_digest_MERGE from '@redis/bloom/dist/lib/commands/t-digest/MERGE';
import * as _redis_bloom_dist_lib_commands_t_digest_INFO from '@redis/bloom/dist/lib/commands/t-digest/INFO';
import * as _redis_bloom_dist_lib_commands_t_digest_CREATE from '@redis/bloom/dist/lib/commands/t-digest/CREATE';
import * as _redis_bloom_dist_lib_commands_cuckoo_RESERVE from '@redis/bloom/dist/lib/commands/cuckoo/RESERVE';
import * as _redis_bloom_dist_lib_commands_cuckoo_INSERT from '@redis/bloom/dist/lib/commands/cuckoo/INSERT';
import * as _redis_bloom_dist_lib_commands_cuckoo_INFO from '@redis/bloom/dist/lib/commands/cuckoo/INFO';
import * as _redis_bloom_dist_lib_commands_count_min_sketch_MERGE from '@redis/bloom/dist/lib/commands/count-min-sketch/MERGE';
import * as _redis_bloom_dist_lib_commands_count_min_sketch_INFO from '@redis/bloom/dist/lib/commands/count-min-sketch/INFO';
import * as _redis_bloom_dist_lib_commands_count_min_sketch_INCRBY from '@redis/bloom/dist/lib/commands/count-min-sketch/INCRBY';
import * as _redis_bloom_dist_lib_commands_bloom_RESERVE from '@redis/bloom/dist/lib/commands/bloom/RESERVE';
import * as _redis_bloom_dist_lib_commands_bloom_INSERT from '@redis/bloom/dist/lib/commands/bloom/INSERT';
import * as _redis_bloom_dist_lib_commands_bloom_INFO from '@redis/bloom/dist/lib/commands/bloom/INFO';
import * as _redis_time_series_dist_lib_commands_MRANGE from '@redis/time-series/dist/lib/commands/MRANGE';
import * as _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS from '@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS';
import * as _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS_GROUPBY from '@redis/time-series/dist/lib/commands/MRANGE_WITHLABELS_GROUPBY';
import * as _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS_GROUPBY from '@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS_GROUPBY';
import * as _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS from '@redis/time-series/dist/lib/commands/MRANGE_SELECTED_LABELS';
import * as _redis_time_series_dist_lib_commands_RANGE from '@redis/time-series/dist/lib/commands/RANGE';
import * as _redis_time_series_dist_lib_commands_MRANGE_GROUPBY from '@redis/time-series/dist/lib/commands/MRANGE_GROUPBY';
import * as _redis_time_series_dist_lib_commands_MGET_WITHLABELS from '@redis/time-series/dist/lib/commands/MGET_WITHLABELS';
import * as _redis_time_series_dist_lib_commands_MGET from '@redis/time-series/dist/lib/commands/MGET';
import * as _redis_time_series_dist_lib_commands_MADD from '@redis/time-series/dist/lib/commands/MADD';
import * as _redis_time_series_dist_lib_commands_INFO_DEBUG from '@redis/time-series/dist/lib/commands/INFO_DEBUG';
import * as _redis_time_series_dist_lib_commands_INFO from '@redis/time-series/dist/lib/commands/INFO';
import * as _redis_time_series_dist_lib_commands_GET from '@redis/time-series/dist/lib/commands/GET';
import * as _redis_time_series_dist_lib_commands_INCRBY from '@redis/time-series/dist/lib/commands/INCRBY';
import * as _redis_time_series_dist_lib_commands_CREATE from '@redis/time-series/dist/lib/commands/CREATE';
import * as _redis_time_series_dist_lib_commands_ALTER from '@redis/time-series/dist/lib/commands/ALTER';
import * as _redis_time_series_dist_lib_commands_ADD from '@redis/time-series/dist/lib/commands/ADD';
import * as _redis_time_series_dist_lib_commands from '@redis/time-series/dist/lib/commands';
import * as _redis_search_dist_lib_commands_SYNUPDATE from '@redis/search/dist/lib/commands/SYNUPDATE';
import * as _redis_search_dist_lib_commands_SUGGET from '@redis/search/dist/lib/commands/SUGGET';
import * as _redis_search_dist_lib_commands_SUGADD from '@redis/search/dist/lib/commands/SUGADD';
import * as _redis_search_dist_lib_commands_SPELLCHECK from '@redis/search/dist/lib/commands/SPELLCHECK';
import * as _redis_search_dist_lib_commands_SEARCH_NOCONTENT from '@redis/search/dist/lib/commands/SEARCH_NOCONTENT';
import * as _redis_search_dist_lib_commands_SEARCH from '@redis/search/dist/lib/commands/SEARCH';
import * as _redis_search_dist_lib_commands_PROFILE_SEARCH from '@redis/search/dist/lib/commands/PROFILE_SEARCH';
import * as _redis_search_dist_lib_commands_INFO from '@redis/search/dist/lib/commands/INFO';
import * as _redis_search_dist_lib_commands_HYBRID from '@redis/search/dist/lib/commands/HYBRID';
import * as _redis_search_dist_lib_commands_EXPLAINCLI from '@redis/search/dist/lib/commands/EXPLAINCLI';
import * as _redis_search_dist_lib_commands_EXPLAIN from '@redis/search/dist/lib/commands/EXPLAIN';
import * as _redis_search_dist_lib_commands_DROPINDEX from '@redis/search/dist/lib/commands/DROPINDEX';
import * as _redis_client_dist_lib_commands_generic_transformers from '@redis/client/dist/lib/commands/generic-transformers';
import * as _redis_search_dist_lib_commands_CURSOR_READ from '@redis/search/dist/lib/commands/CURSOR_READ';
import * as _redis_search_dist_lib_commands_CREATE from '@redis/search/dist/lib/commands/CREATE';
import * as _redis_search_dist_lib_commands_AGGREGATE from '@redis/search/dist/lib/commands/AGGREGATE';
import * as _redis_search_dist_lib_commands_AGGREGATE_WITHCURSOR from '@redis/search/dist/lib/commands/AGGREGATE_WITHCURSOR';
import * as _redis_json_dist_lib_commands_TYPE from '@redis/json/dist/lib/commands/TYPE';
import * as _redis_json_dist_lib_commands_STRLEN from '@redis/json/dist/lib/commands/STRLEN';
import * as _redis_json_dist_lib_commands_STRAPPEND from '@redis/json/dist/lib/commands/STRAPPEND';
import * as _redis_json_dist_lib_commands_SET from '@redis/json/dist/lib/commands/SET';
import * as _redis_json_dist_lib_commands_OBJLEN from '@redis/json/dist/lib/commands/OBJLEN';
import * as _redis_json_dist_lib_commands_OBJKEYS from '@redis/json/dist/lib/commands/OBJKEYS';
import * as _redis_json_dist_lib_commands_MSET from '@redis/json/dist/lib/commands/MSET';
import * as _redis_json_dist_lib_commands from '@redis/json/dist/lib/commands';
import * as _redis_json_dist_lib_commands_GET from '@redis/json/dist/lib/commands/GET';
import * as _redis_json_dist_lib_commands_FORGET from '@redis/json/dist/lib/commands/FORGET';
import * as _redis_json_dist_lib_commands_DEL from '@redis/json/dist/lib/commands/DEL';
import * as _redis_json_dist_lib_commands_DEBUG_MEMORY from '@redis/json/dist/lib/commands/DEBUG_MEMORY';
import * as _redis_json_dist_lib_commands_CLEAR from '@redis/json/dist/lib/commands/CLEAR';
import * as _redis_json_dist_lib_commands_ARRPOP from '@redis/json/dist/lib/commands/ARRPOP';
import * as _redis_json_dist_lib_commands_ARRLEN from '@redis/json/dist/lib/commands/ARRLEN';
import * as _redis_json_dist_lib_commands_ARRINDEX from '@redis/json/dist/lib/commands/ARRINDEX';
import * as _redis_client_dist_lib_RESP_types from '@redis/client/dist/lib/RESP/types';
import * as _redis from 'redis';

declare const redis: _redis_client.RedisClientType<{
    json: {
        ARRAPPEND: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, json: _redis.RedisJSON, ...jsons: _redis.RedisJSON[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        arrAppend: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, json: _redis.RedisJSON, ...jsons: _redis.RedisJSON[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        ARRINDEX: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, json: _redis.RedisJSON, options?: _redis_json_dist_lib_commands_ARRINDEX.JsonArrIndexOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        arrIndex: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, json: _redis.RedisJSON, options?: _redis_json_dist_lib_commands_ARRINDEX.JsonArrIndexOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        ARRINSERT: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, index: number, json: _redis.RedisJSON, ...jsons: _redis.RedisJSON[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        arrInsert: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, index: number, json: _redis.RedisJSON, ...jsons: _redis.RedisJSON[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        ARRLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_ARRLEN.JsonArrLenOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        arrLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_ARRLEN.JsonArrLenOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        ARRPOP: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_ARRPOP.RedisArrPopOptions | undefined) => void;
            readonly transformReply: (this: void, reply: _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>) => string | number | boolean | Date | _redis_client_dist_lib_RESP_types.NullReply | {
                [key: string]: _redis.RedisJSON;
                [key: number]: _redis.RedisJSON;
            } | (_redis.RedisJSON | _redis_client_dist_lib_RESP_types.NullReply)[] | null;
        };
        arrPop: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_ARRPOP.RedisArrPopOptions | undefined) => void;
            readonly transformReply: (this: void, reply: _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>) => string | number | boolean | Date | _redis_client_dist_lib_RESP_types.NullReply | (_redis.RedisJSON | _redis_client_dist_lib_RESP_types.NullReply)[] | {
                [key: string]: _redis.RedisJSON;
                [key: number]: _redis.RedisJSON;
            } | null;
        };
        ARRTRIM: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, start: number, stop: number) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        arrTrim: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, start: number, stop: number) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        CLEAR: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_CLEAR.JsonClearOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        clear: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_CLEAR.JsonClearOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        DEBUG_MEMORY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_DEBUG_MEMORY.JsonDebugMemoryOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        debugMemory: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_DEBUG_MEMORY.JsonDebugMemoryOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        DEL: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_DEL.JsonDelOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        del: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_DEL.JsonDelOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        FORGET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_FORGET.JsonForgetOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        forget: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_FORGET.JsonForgetOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        GET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_GET.JsonGetOptions | undefined) => void;
            readonly transformReply: typeof _redis_json_dist_lib_commands.transformRedisJsonNullReply;
        };
        get: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_GET.JsonGetOptions | undefined) => void;
            readonly transformReply: typeof _redis_json_dist_lib_commands.transformRedisJsonNullReply;
        };
        MERGE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, value: _redis.RedisJSON) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        merge: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, value: _redis.RedisJSON) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        MGET: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, keys: _redis.RedisArgument[], path: _redis.RedisArgument) => void;
            readonly transformReply: (this: void, reply: (_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>)[]) => (_redis.RedisJSON | _redis_client_dist_lib_RESP_types.NullReply)[];
        };
        mGet: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, keys: _redis.RedisArgument[], path: _redis.RedisArgument) => void;
            readonly transformReply: (this: void, reply: (_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>)[]) => (_redis.RedisJSON | _redis_client_dist_lib_RESP_types.NullReply)[];
        };
        MSET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, items: _redis_json_dist_lib_commands_MSET.JsonMSetItem[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        mSet: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, items: _redis_json_dist_lib_commands_MSET.JsonMSetItem[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        NUMINCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>) => number | (number | null)[];
                readonly 3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        numIncrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>) => number | (number | null)[];
                readonly 3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        NUMMULTBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>) => number | (number | null)[];
                readonly 3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        numMultBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, by: number) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>) => number | (number | null)[];
                readonly 3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        OBJKEYS: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_OBJKEYS.JsonObjKeysOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>>;
        };
        objKeys: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_OBJKEYS.JsonObjKeysOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>>;
        };
        OBJLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_OBJLEN.JsonObjLenOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        objLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_OBJLEN.JsonObjLenOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        SET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, json: _redis.RedisJSON, options?: _redis_json_dist_lib_commands_SET.JsonSetOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        set: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument, json: _redis.RedisJSON, options?: _redis_json_dist_lib_commands_SET.JsonSetOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        STRAPPEND: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, append: string, options?: _redis_json_dist_lib_commands_STRAPPEND.JsonStrAppendOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        strAppend: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, append: string, options?: _redis_json_dist_lib_commands_STRAPPEND.JsonStrAppendOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        STRLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_STRLEN.JsonStrLenOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        strLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_STRLEN.JsonStrLenOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        TOGGLE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        toggle: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, path: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        TYPE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_TYPE.JsonTypeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                readonly 3: (reply: (_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>)[]) => _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
            };
        };
        type: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_json_dist_lib_commands_TYPE.JsonTypeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                readonly 3: (reply: (_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>)[]) => _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
            };
        };
    };
    ft: {
        _LIST: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                readonly 3: () => _redis_client_dist_lib_RESP_types.SetReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
            };
        };
        _list: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                readonly 3: () => _redis_client_dist_lib_RESP_types.SetReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
            };
        };
        ALTER: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, schema: _redis.RediSearchSchema) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        alter: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, schema: _redis.RediSearchSchema) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        AGGREGATE_WITHCURSOR: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_AGGREGATE_WITHCURSOR.FtAggregateWithCursorOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>, ...results: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>[]], cursor: _redis_client_dist_lib_RESP_types.NumberReply<number>]) => _redis_search_dist_lib_commands_AGGREGATE_WITHCURSOR.AggregateWithCursorReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        aggregateWithCursor: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_AGGREGATE_WITHCURSOR.FtAggregateWithCursorOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>, ...results: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>[]], cursor: _redis_client_dist_lib_RESP_types.NumberReply<number>]) => _redis_search_dist_lib_commands_AGGREGATE_WITHCURSOR.AggregateWithCursorReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        AGGREGATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_AGGREGATE.FtAggregateOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [total: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>, ...results: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>[]], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_search_dist_lib_commands_AGGREGATE.AggregateReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        aggregate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_AGGREGATE.FtAggregateOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [total: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>, ...results: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>[]], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_search_dist_lib_commands_AGGREGATE.AggregateReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        ALIASADD: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, alias: _redis.RedisArgument, index: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        aliasAdd: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, alias: _redis.RedisArgument, index: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        ALIASDEL: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, alias: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        aliasDel: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, alias: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        ALIASUPDATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, alias: _redis.RedisArgument, index: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        aliasUpdate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, alias: _redis.RedisArgument, index: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        CONFIG_GET: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, option: string) => void;
            readonly transformReply: (this: void, reply: _redis_client_dist_lib_RESP_types.TuplesReply<[_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>[]) => Record<string, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
        };
        configGet: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, option: string) => void;
            readonly transformReply: (this: void, reply: _redis_client_dist_lib_RESP_types.TuplesReply<[_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>[]) => Record<string, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
        };
        CONFIG_SET: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, property: Buffer | (string & {}) | "a" | "b", value: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        configSet: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, property: Buffer | (string & {}) | "a" | "b", value: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        CREATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, schema: _redis.RediSearchSchema, options?: _redis_search_dist_lib_commands_CREATE.CreateOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        create: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, schema: _redis.RediSearchSchema, options?: _redis_search_dist_lib_commands_CREATE.CreateOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        CURSOR_DEL: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, cursorId: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        cursorDel: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, cursorId: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        CURSOR_READ: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, cursor: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>, options?: _redis_search_dist_lib_commands_CURSOR_READ.FtCursorReadOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>, ...results: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>[]], cursor: _redis_client_dist_lib_RESP_types.NumberReply<number>]) => _redis_search_dist_lib_commands_AGGREGATE_WITHCURSOR.AggregateWithCursorReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        cursorRead: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, cursor: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>, options?: _redis_search_dist_lib_commands_CURSOR_READ.FtCursorReadOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [result: [total: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>, ...results: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>[]], cursor: _redis_client_dist_lib_RESP_types.NumberReply<number>]) => _redis_search_dist_lib_commands_AGGREGATE_WITHCURSOR.AggregateWithCursorReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        DICTADD: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, dictionary: _redis.RedisArgument, term: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        dictAdd: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, dictionary: _redis.RedisArgument, term: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        DICTDEL: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, dictionary: _redis.RedisArgument, term: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        dictDel: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, dictionary: _redis.RedisArgument, term: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        DICTDUMP: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, dictionary: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                readonly 3: () => _redis_client_dist_lib_RESP_types.SetReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
            };
        };
        dictDump: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, dictionary: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                readonly 3: () => _redis_client_dist_lib_RESP_types.SetReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
            };
        };
        DROPINDEX: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_DROPINDEX.FtDropIndexOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
                readonly 3: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
            };
        };
        dropIndex: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_DROPINDEX.FtDropIndexOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
                readonly 3: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
            };
        };
        EXPLAIN: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_EXPLAIN.FtExplainOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<string>;
        };
        explain: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_EXPLAIN.FtExplainOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<string>;
        };
        EXPLAINCLI: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_EXPLAINCLI.FtExplainCLIOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
        };
        explainCli: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_EXPLAINCLI.FtExplainCLIOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
        };
        HYBRID: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, options: _redis_search_dist_lib_commands_HYBRID.FtHybridOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: any) => _redis_search_dist_lib_commands_HYBRID.HybridSearchResult;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        hybrid: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, options: _redis_search_dist_lib_commands_HYBRID.FtHybridOptions) => void;
            readonly transformReply: {
                readonly 2: (reply: any) => _redis_search_dist_lib_commands_HYBRID.HybridSearchResult;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        INFO: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: any[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_search_dist_lib_commands_INFO.InfoReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        info: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: any[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_search_dist_lib_commands_INFO.InfoReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        PROFILESEARCH: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: (_redis_search_dist_lib_commands_PROFILE_SEARCH.ProfileOptions & _redis.FtSearchOptions) | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [_redis_search_dist_lib_commands_SEARCH.SearchRawReply, _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.ReplyUnion>]) => _redis_search_dist_lib_commands_PROFILE_SEARCH.ProfileReplyResp2;
                readonly 3: (reply: _redis_client_dist_lib_RESP_types.ReplyUnion) => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        profileSearch: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: (_redis_search_dist_lib_commands_PROFILE_SEARCH.ProfileOptions & _redis.FtSearchOptions) | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [_redis_search_dist_lib_commands_SEARCH.SearchRawReply, _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.ReplyUnion>]) => _redis_search_dist_lib_commands_PROFILE_SEARCH.ProfileReplyResp2;
                readonly 3: (reply: _redis_client_dist_lib_RESP_types.ReplyUnion) => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        PROFILEAGGREGATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: string, query: string, options?: (_redis_search_dist_lib_commands_PROFILE_SEARCH.ProfileOptions & _redis_search_dist_lib_commands_AGGREGATE.FtAggregateOptions) | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [[total: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>, ...results: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>[]], _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.ReplyUnion>]) => _redis_search_dist_lib_commands_PROFILE_SEARCH.ProfileReplyResp2;
                readonly 3: (reply: _redis_client_dist_lib_RESP_types.ReplyUnion) => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        profileAggregate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: string, query: string, options?: (_redis_search_dist_lib_commands_PROFILE_SEARCH.ProfileOptions & _redis_search_dist_lib_commands_AGGREGATE.FtAggregateOptions) | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: [[total: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>, ...results: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>[]], _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.ReplyUnion>]) => _redis_search_dist_lib_commands_PROFILE_SEARCH.ProfileReplyResp2;
                readonly 3: (reply: _redis_client_dist_lib_RESP_types.ReplyUnion) => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SEARCH_NOCONTENT: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis.FtSearchOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_search_dist_lib_commands_SEARCH.SearchRawReply) => _redis_search_dist_lib_commands_SEARCH_NOCONTENT.SearchNoContentReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        searchNoContent: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis.FtSearchOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_search_dist_lib_commands_SEARCH.SearchRawReply) => _redis_search_dist_lib_commands_SEARCH_NOCONTENT.SearchNoContentReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SEARCH: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis.FtSearchOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_search_dist_lib_commands_SEARCH.SearchRawReply) => _redis.SearchReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        search: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis.FtSearchOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_search_dist_lib_commands_SEARCH.SearchRawReply) => _redis.SearchReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SPELLCHECK: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_SPELLCHECK.FtSpellCheckOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [_: string, term: string, suggestions: [score: string, suggestion: string][]][]) => {
                    term: string;
                    suggestions: {
                        score: number;
                        suggestion: string;
                    }[];
                }[];
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        spellCheck: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, query: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_SPELLCHECK.FtSpellCheckOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (rawReply: [_: string, term: string, suggestions: [score: string, suggestion: string][]][]) => {
                    term: string;
                    suggestions: {
                        score: number;
                        suggestion: string;
                    }[];
                }[];
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        SUGADD: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, string: _redis.RedisArgument, score: number, options?: _redis_search_dist_lib_commands_SUGADD.FtSugAddOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        sugAdd: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, string: _redis.RedisArgument, score: number, options?: _redis_search_dist_lib_commands_SUGADD.FtSugAddOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        SUGDEL: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, string: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>;
        };
        sugDel: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, string: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>;
        };
        SUGGET_WITHPAYLOADS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, prefix: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_SUGGET.FtSugGetOptions | undefined) => void;
            readonly transformReply: (this: void, reply: _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>[]) => {
                suggestion: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                payload: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
            }[] | null;
        };
        sugGetWithPayloads: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, prefix: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_SUGGET.FtSugGetOptions | undefined) => void;
            readonly transformReply: (this: void, reply: _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>[]) => {
                suggestion: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                payload: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
            }[] | null;
        };
        SUGGET_WITHSCORES_WITHPAYLOADS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, prefix: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_SUGGET.FtSugGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => {
                    suggestion: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                    score: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    payload: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                }[] | null;
                readonly 3: (reply: _redis_client_dist_lib_RESP_types.NullReply | (_redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.DoubleReply<number>)[]) => {
                    suggestion: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                    score: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    payload: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                }[] | null;
            };
        };
        sugGetWithScoresWithPayloads: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, prefix: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_SUGGET.FtSugGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => {
                    suggestion: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                    score: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    payload: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                }[] | null;
                readonly 3: (reply: _redis_client_dist_lib_RESP_types.NullReply | (_redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.DoubleReply<number>)[]) => {
                    suggestion: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                    score: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    payload: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                }[] | null;
            };
        };
        SUGGET_WITHSCORES: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, prefix: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_SUGGET.FtSugGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => {
                    suggestion: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                    score: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[] | null;
                readonly 3: (reply: (_redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.DoubleReply<number>)[]) => {
                    suggestion: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                    score: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[] | null;
            };
        };
        sugGetWithScores: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, prefix: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_SUGGET.FtSugGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (reply: _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => {
                    suggestion: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                    score: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[] | null;
                readonly 3: (reply: (_redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.DoubleReply<number>)[]) => {
                    suggestion: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                    score: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[] | null;
            };
        };
        SUGGET: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, prefix: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_SUGGET.FtSugGetOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
        };
        sugGet: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, prefix: _redis.RedisArgument, options?: _redis_search_dist_lib_commands_SUGGET.FtSugGetOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
        };
        SUGLEN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        sugLen: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        SYNDUMP: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: (_redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>)[]) => Record<string, _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>>;
                readonly 3: () => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>>;
            };
        };
        synDump: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: (_redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>)[]) => Record<string, _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>>;
                readonly 3: () => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>>;
            };
        };
        SYNUPDATE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, groupId: _redis.RedisArgument, terms: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_search_dist_lib_commands_SYNUPDATE.FtSynUpdateOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        synUpdate: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, groupId: _redis.RedisArgument, terms: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_search_dist_lib_commands_SYNUPDATE.FtSynUpdateOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        TAGVALS: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, fieldName: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                readonly 3: () => _redis_client_dist_lib_RESP_types.SetReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
            };
        };
        tagVals: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, index: _redis.RedisArgument, fieldName: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                readonly 3: () => _redis_client_dist_lib_RESP_types.SetReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
            };
        };
    };
    ts: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, timestamp: _redis_time_series_dist_lib_commands.Timestamp, value: number, options?: _redis_time_series_dist_lib_commands_ADD.TsAddOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, timestamp: _redis_time_series_dist_lib_commands.Timestamp, value: number, options?: _redis_time_series_dist_lib_commands_ADD.TsAddOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly ALTER: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_time_series_dist_lib_commands_ALTER.TsAlterOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly alter: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_time_series_dist_lib_commands_ALTER.TsAlterOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly CREATE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_time_series_dist_lib_commands_CREATE.TsCreateOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly create: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_time_series_dist_lib_commands_CREATE.TsCreateOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly CREATERULE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, sourceKey: _redis.RedisArgument, destinationKey: _redis.RedisArgument, aggregationType: _redis.TimeSeriesAggregationType, bucketDuration: number, alignTimestamp?: number | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly createRule: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, sourceKey: _redis.RedisArgument, destinationKey: _redis.RedisArgument, aggregationType: _redis.TimeSeriesAggregationType, bucketDuration: number, alignTimestamp?: number | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly DECRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, value: number, options?: _redis_time_series_dist_lib_commands_INCRBY.TsIncrByOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly decrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, value: number, options?: _redis_time_series_dist_lib_commands_INCRBY.TsIncrByOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly DEL: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly del: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly DELETERULE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, sourceKey: _redis.RedisArgument, destinationKey: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly deleteRule: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, sourceKey: _redis.RedisArgument, destinationKey: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly GET: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_time_series_dist_lib_commands_GET.TsGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.RespType<42, [], never, []> | _redis_client_dist_lib_RESP_types.RespType<42, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], never, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>>) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: number;
                } | null;
                readonly 3: (this: void, reply: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_time_series_dist_lib_commands_GET.TsGetReply>) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                } | null;
            };
        };
        readonly get: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_time_series_dist_lib_commands_GET.TsGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_client_dist_lib_RESP_types.RespType<42, [], never, []> | _redis_client_dist_lib_RESP_types.RespType<42, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], never, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>>) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: number;
                } | null;
                readonly 3: (this: void, reply: _redis_client_dist_lib_RESP_types.UnwrapReply<_redis_time_series_dist_lib_commands_GET.TsGetReply>) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                } | null;
            };
        };
        readonly INCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, value: number, options?: _redis_time_series_dist_lib_commands_INCRBY.TsIncrByOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly incrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, value: number, options?: _redis_time_series_dist_lib_commands_INCRBY.TsIncrByOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly INFO_DEBUG: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [..._redis_time_series_dist_lib_commands_INFO.InfoRawReplyTypes[], "keySelfName", _redis_client_dist_lib_RESP_types.BlobStringReply<string>, "Chunks", ["startTimestamp", _redis_client_dist_lib_RESP_types.NumberReply<number>, "endTimestamp", _redis_client_dist_lib_RESP_types.NumberReply<number>, "samples", _redis_client_dist_lib_RESP_types.NumberReply<number>, "size", _redis_client_dist_lib_RESP_types.NumberReply<number>, "bytesPerSample", _redis_client_dist_lib_RESP_types.SimpleStringReply<string>][]], _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_time_series_dist_lib_commands_INFO_DEBUG.InfoDebugReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly infoDebug: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [..._redis_time_series_dist_lib_commands_INFO.InfoRawReplyTypes[], "keySelfName", _redis_client_dist_lib_RESP_types.BlobStringReply<string>, "Chunks", ["startTimestamp", _redis_client_dist_lib_RESP_types.NumberReply<number>, "endTimestamp", _redis_client_dist_lib_RESP_types.NumberReply<number>, "samples", _redis_client_dist_lib_RESP_types.NumberReply<number>, "size", _redis_client_dist_lib_RESP_types.NumberReply<number>, "bytesPerSample", _redis_client_dist_lib_RESP_types.SimpleStringReply<string>][]], _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_time_series_dist_lib_commands_INFO_DEBUG.InfoDebugReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_INFO.InfoRawReply, _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_time_series_dist_lib_commands_INFO.InfoReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: string) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_INFO.InfoRawReply, _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_time_series_dist_lib_commands_INFO.InfoReply;
                readonly 3: () => _redis_client_dist_lib_RESP_types.ReplyUnion;
            };
            readonly unstableResp3: true;
        };
        readonly MADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, toAdd: _redis_time_series_dist_lib_commands_MADD.TsMAddSample[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.SimpleErrorReply>;
        };
        readonly mAdd: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, toAdd: _redis_time_series_dist_lib_commands_MADD.TsMAddSample[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number> | _redis_client_dist_lib_RESP_types.SimpleErrorReply>;
        };
        readonly MGET_SELECTED_LABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, selectedLabels: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_MGET.TsMGetOptions | undefined) => void;
            readonly transformReply: {
                2(this: void, reply: _redis_time_series_dist_lib_commands_MGET_WITHLABELS.MGetLabelsRawReply2<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>, _: any, typeMapping?: _redis.TypeMapping | undefined): _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: _redis_time_series_dist_lib_commands_MGET_WITHLABELS.MGetLabelsRawReply3<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>): _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly mGetSelectedLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, selectedLabels: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_MGET.TsMGetOptions | undefined) => void;
            readonly transformReply: {
                2(this: void, reply: _redis_time_series_dist_lib_commands_MGET_WITHLABELS.MGetLabelsRawReply2<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>, _: any, typeMapping?: _redis.TypeMapping | undefined): _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: _redis_time_series_dist_lib_commands_MGET_WITHLABELS.MGetLabelsRawReply3<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>): _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly MGET_WITHLABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_MGET_WITHLABELS.TsMGetWithLabelsOptions | undefined) => void;
            readonly transformReply: {
                2(this: void, reply: _redis_time_series_dist_lib_commands_MGET_WITHLABELS.MGetLabelsRawReply2<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>, _: any, typeMapping?: _redis.TypeMapping | undefined): _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: _redis_time_series_dist_lib_commands_MGET_WITHLABELS.MGetLabelsRawReply3<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>): _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly mGetWithLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_MGET_WITHLABELS.TsMGetWithLabelsOptions | undefined) => void;
            readonly transformReply: {
                2(this: void, reply: _redis_time_series_dist_lib_commands_MGET_WITHLABELS.MGetLabelsRawReply2<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>, _: any, typeMapping?: _redis.TypeMapping | undefined): _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    };
                }>;
                3(this: void, reply: _redis_time_series_dist_lib_commands_MGET_WITHLABELS.MGetLabelsRawReply3<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>): _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly MGET: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_MGET.TsMGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MGET.MGetRawReply2, _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    };
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MGET.MGetRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly mGet: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_MGET.TsMGetOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MGET.MGetRawReply2, _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    };
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MGET.MGetRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    sample: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    };
                }>;
            };
        };
        readonly MRANGE_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupByRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupByRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_SELECTED_LABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, selectedLabels: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeSelectedLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, selectedLabels: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_SELECTED_LABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, selectedLabels: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeSelectedLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, selectedLabels: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_WITHLABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeWithLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE_WITHLABELS: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS.TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: Record<string, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS.TsMRangeWithLabelsRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRangeWithLabels: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS.TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: Record<string, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS.TsMRangeWithLabelsRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MRANGE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE.TsMRangeRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE.TsMRangeRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[]>;
            };
        };
        readonly mRange: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE.TsMRangeRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE.TsMRangeRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[]>;
            };
        };
        readonly MREVRANGE_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupByRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupByRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_SELECTED_LABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, selectedLabels: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeSelectedLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, selectedLabels: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_SELECTED_LABELS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, selectedLabels: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeSelectedLabels: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, selectedLabels: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_SELECTED_LABELS.TsMRangeSelectedLabelsRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: never;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_WITHLABELS_GROUPBY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeWithLabelsGroupBy: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, groupBy: _redis_time_series_dist_lib_commands_MRANGE_GROUPBY.TsMRangeGroupBy, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: string[] | Buffer[];
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS_GROUPBY.TsMRangeWithLabelsGroupByRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    sources: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE_WITHLABELS: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS.TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: Record<string, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS.TsMRangeWithLabelsRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly mRevRangeWithLabels: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS.TsMRangeWithLabelsRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: Record<string, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: number;
                    }[];
                }>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE_WITHLABELS.TsMRangeWithLabelsRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    labels: _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                    samples: {
                        timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                        value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                    }[];
                }>;
            };
        };
        readonly MREVRANGE: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE.TsMRangeRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE.TsMRangeRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[]>;
            };
        };
        readonly mRevRange: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (parser: _redis.CommandParser, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE.TsMRangeRawReply2, _?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: number;
                }[]>;
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands_MRANGE.TsMRangeRawReply3) => _redis_client_dist_lib_RESP_types.MapReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>, {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[]>;
            };
        };
        readonly QUERYINDEX: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                readonly 3: () => _redis_client_dist_lib_RESP_types.SetReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
            };
        };
        readonly queryIndex: {
            readonly NOT_KEYED_COMMAND: true;
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, filter: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: {
                readonly 2: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
                readonly 3: () => _redis_client_dist_lib_RESP_types.SetReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
            };
        };
        readonly RANGE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_client_dist_lib_RESP_types.RespType<42, _redis_client_dist_lib_RESP_types.RespType<42, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], never, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>[], never, _redis_client_dist_lib_RESP_types.RespType<42, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], never, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>[]>) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands.SamplesRawReply) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[];
            };
        };
        readonly range: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_client_dist_lib_RESP_types.RespType<42, _redis_client_dist_lib_RESP_types.RespType<42, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], never, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>[], never, _redis_client_dist_lib_RESP_types.RespType<42, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], never, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>[]>) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands.SamplesRawReply) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[];
            };
        };
        readonly REVRANGE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_client_dist_lib_RESP_types.RespType<42, _redis_client_dist_lib_RESP_types.RespType<42, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], never, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>[], never, _redis_client_dist_lib_RESP_types.RespType<42, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], never, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>[]>) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands.SamplesRawReply) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[];
            };
        };
        readonly revRange: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, fromTimestamp: _redis_time_series_dist_lib_commands.Timestamp, toTimestamp: _redis_time_series_dist_lib_commands.Timestamp, options?: _redis_time_series_dist_lib_commands_RANGE.TsRangeOptions | undefined) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: _redis_client_dist_lib_RESP_types.RespType<42, _redis_client_dist_lib_RESP_types.RespType<42, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], never, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>[], never, _redis_client_dist_lib_RESP_types.RespType<42, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], never, [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]>[]>) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: number;
                }[];
                readonly 3: (this: void, reply: _redis_time_series_dist_lib_commands.SamplesRawReply) => {
                    timestamp: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                    value: _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                }[];
            };
        };
    };
    bf: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly CARD: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly card: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly EXISTS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly exists: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [_redis_client_dist_lib_RESP_types.SimpleStringReply<"Capacity">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Size">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of filters">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of items inserted">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Expansion rate">, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>], _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_bloom_dist_lib_commands_bloom_INFO.BfInfoReplyMap;
                readonly 3: () => _redis_bloom_dist_lib_commands_bloom_INFO.BfInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [_redis_client_dist_lib_RESP_types.SimpleStringReply<"Capacity">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Size">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of filters">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of items inserted">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Expansion rate">, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.NumberReply<number>], _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_bloom_dist_lib_commands_bloom_INFO.BfInfoReplyMap;
                readonly 3: () => _redis_bloom_dist_lib_commands_bloom_INFO.BfInfoReplyMap;
            };
        };
        readonly INSERT: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_bloom_dist_lib_commands_bloom_INSERT.BfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly insert: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_bloom_dist_lib_commands_bloom_INSERT.BfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly LOADCHUNK: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, iterator: number, chunk: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly loadChunk: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, iterator: number, chunk: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly MADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly mAdd: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly MEXISTS: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly mExists: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly RESERVE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, errorRate: number, capacity: number, options?: _redis_bloom_dist_lib_commands_bloom_RESERVE.BfReserveOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly reserve: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, errorRate: number, capacity: number, options?: _redis_bloom_dist_lib_commands_bloom_RESERVE.BfReserveOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly SCANDUMP: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]) => {
                iterator: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                chunk: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
            };
        };
        readonly scanDump: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.BlobStringReply<string>]) => {
                iterator: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                chunk: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
            };
        };
    };
    cms: {
        readonly INCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_bloom_dist_lib_commands_count_min_sketch_INCRBY.BfIncrByItem | _redis_bloom_dist_lib_commands_count_min_sketch_INCRBY.BfIncrByItem[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        readonly incrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_bloom_dist_lib_commands_count_min_sketch_INCRBY.BfIncrByItem | _redis_bloom_dist_lib_commands_count_min_sketch_INCRBY.BfIncrByItem[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [_redis_client_dist_lib_RESP_types.SimpleStringReply<"width">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"depth">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"count">, _redis_client_dist_lib_RESP_types.NumberReply<number>], _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_bloom_dist_lib_commands_count_min_sketch_INFO.CmsInfoReply;
                readonly 3: () => _redis_bloom_dist_lib_commands_count_min_sketch_INFO.CmsInfoReply;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [_redis_client_dist_lib_RESP_types.SimpleStringReply<"width">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"depth">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"count">, _redis_client_dist_lib_RESP_types.NumberReply<number>], _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_bloom_dist_lib_commands_count_min_sketch_INFO.CmsInfoReply;
                readonly 3: () => _redis_bloom_dist_lib_commands_count_min_sketch_INFO.CmsInfoReply;
            };
        };
        readonly INITBYDIM: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, width: number, depth: number) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly initByDim: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, width: number, depth: number) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly INITBYPROB: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, error: number, probability: number) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly initByProb: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, error: number, probability: number) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly MERGE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, destination: _redis.RedisArgument, source: _redis_bloom_dist_lib_commands_count_min_sketch_MERGE.BfMergeSketches) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly merge: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, destination: _redis.RedisArgument, source: _redis_bloom_dist_lib_commands_count_min_sketch_MERGE.BfMergeSketches) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly QUERY: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        readonly query: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
    };
    cf: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly ADDNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly addNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly COUNT: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly count: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.NumberReply<number>;
        };
        readonly DEL: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly del: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly EXISTS: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly exists: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, item: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.NumberReply<0 | 1>) => boolean;
                3: () => _redis_client_dist_lib_RESP_types.BooleanReply<boolean>;
            };
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [_redis_client_dist_lib_RESP_types.SimpleStringReply<"Size">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of buckets">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of filters">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of items inserted">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of items deleted">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Bucket size">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Expansion rate">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Max iterations">, _redis_client_dist_lib_RESP_types.NumberReply<number>], _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_bloom_dist_lib_commands_cuckoo_INFO.CfInfoReplyMap;
                readonly 3: () => _redis_bloom_dist_lib_commands_cuckoo_INFO.CfInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [_redis_client_dist_lib_RESP_types.SimpleStringReply<"Size">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of buckets">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of filters">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of items inserted">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Number of items deleted">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Bucket size">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Expansion rate">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Max iterations">, _redis_client_dist_lib_RESP_types.NumberReply<number>], _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_bloom_dist_lib_commands_cuckoo_INFO.CfInfoReplyMap;
                readonly 3: () => _redis_bloom_dist_lib_commands_cuckoo_INFO.CfInfoReplyMap;
            };
        };
        readonly INSERT: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_bloom_dist_lib_commands_cuckoo_INSERT.CfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly insert: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_bloom_dist_lib_commands_cuckoo_INSERT.CfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly INSERTNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_bloom_dist_lib_commands_cuckoo_INSERT.CfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly insertNX: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_bloom_dist_lib_commands_cuckoo_INSERT.CfInsertOptions | undefined) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly LOADCHUNK: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, iterator: number, chunk: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly loadChunk: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, iterator: number, chunk: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly RESERVE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, capacity: number, options?: _redis_bloom_dist_lib_commands_cuckoo_RESERVE.CfReserveOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly reserve: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, capacity: number, options?: _redis_bloom_dist_lib_commands_cuckoo_RESERVE.CfReserveOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly SCANDUMP: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>]) => {
                iterator: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                chunk: _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
            };
        };
        readonly scanDump: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, iterator: number) => void;
            readonly transformReply: (this: void, reply: [_redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>]) => {
                iterator: _redis_client_dist_lib_RESP_types.NumberReply<number>;
                chunk: _redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
            };
        };
    };
    tDigest: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, values: number[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, values: number[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly BYRANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        readonly byRank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        readonly BYREVRANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        readonly byRevRank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, ranks: number[]) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        readonly CDF: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, values: number[]) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        readonly cdf: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, values: number[]) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        readonly CREATE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_bloom_dist_lib_commands_t_digest_CREATE.TDigestCreateOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly create: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, options?: _redis_bloom_dist_lib_commands_t_digest_CREATE.TDigestCreateOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [_redis_client_dist_lib_RESP_types.SimpleStringReply<"Compression">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Capacity">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Merged nodes">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Unmerged nodes">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Merged weight">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Unmerged weight">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Observations">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Total compressions">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Memory usage">, _redis_client_dist_lib_RESP_types.NumberReply<number>], _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_bloom_dist_lib_commands_t_digest_INFO.TdInfoReplyMap;
                readonly 3: () => _redis_bloom_dist_lib_commands_t_digest_INFO.TdInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (this: void, reply: [_redis_client_dist_lib_RESP_types.SimpleStringReply<"Compression">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Capacity">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Merged nodes">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Unmerged nodes">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Merged weight">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Unmerged weight">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Observations">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Total compressions">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"Memory usage">, _redis_client_dist_lib_RESP_types.NumberReply<number>], _: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_bloom_dist_lib_commands_t_digest_INFO.TdInfoReplyMap;
                readonly 3: () => _redis_bloom_dist_lib_commands_t_digest_INFO.TdInfoReplyMap;
            };
        };
        readonly MAX: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>, preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                3: () => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
            };
        };
        readonly max: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>, preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                3: () => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
            };
        };
        readonly MERGE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, destination: _redis.RedisArgument, source: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_bloom_dist_lib_commands_t_digest_MERGE.TDigestMergeOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly merge: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, destination: _redis.RedisArgument, source: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument, options?: _redis_bloom_dist_lib_commands_t_digest_MERGE.TDigestMergeOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly MIN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>, preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                3: () => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
            };
        };
        readonly min: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>, preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                3: () => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
            };
        };
        readonly QUANTILE: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, quantiles: number[]) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        readonly quantile: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, quantiles: number[]) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>[], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.DoubleReply<number>>;
            };
        };
        readonly RANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, values: number[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        readonly rank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, values: number[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        readonly RESET: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly reset: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly REVRANK: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, values: number[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        readonly revRank: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, values: number[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        readonly TRIMMED_MEAN: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, lowCutPercentile: number, highCutPercentile: number) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>, preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                3: () => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
            };
        };
        readonly trimmedMean: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, lowCutPercentile: number, highCutPercentile: number) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.BlobStringReply<string>, preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
                3: () => _redis_client_dist_lib_RESP_types.DoubleReply<number>;
            };
        };
    };
    topK: {
        readonly ADD: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
        };
        readonly add: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
        };
        readonly COUNT: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        readonly count: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<number>>;
        };
        readonly INCRBY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_bloom_dist_lib_commands_top_k_INCRBY.TopKIncrByItem | _redis_bloom_dist_lib_commands_top_k_INCRBY.TopKIncrByItem[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.SimpleStringReply<string>>;
        };
        readonly incrBy: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_bloom_dist_lib_commands_top_k_INCRBY.TopKIncrByItem | _redis_bloom_dist_lib_commands_top_k_INCRBY.TopKIncrByItem[]) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NullReply | _redis_client_dist_lib_RESP_types.SimpleStringReply<string>>;
        };
        readonly INFO: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: [_redis_client_dist_lib_RESP_types.SimpleStringReply<"k">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"width">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"depth">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"decay">, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_bloom_dist_lib_commands_top_k_INFO.TopKInfoReplyMap;
                readonly 3: () => _redis_bloom_dist_lib_commands_top_k_INFO.TopKInfoReplyMap;
            };
        };
        readonly info: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: {
                readonly 2: (reply: [_redis_client_dist_lib_RESP_types.SimpleStringReply<"k">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"width">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"depth">, _redis_client_dist_lib_RESP_types.NumberReply<number>, _redis_client_dist_lib_RESP_types.SimpleStringReply<"decay">, _redis_client_dist_lib_RESP_types.BlobStringReply<string>], preserve?: any, typeMapping?: _redis.TypeMapping | undefined) => _redis_bloom_dist_lib_commands_top_k_INFO.TopKInfoReplyMap;
                readonly 3: () => _redis_bloom_dist_lib_commands_top_k_INFO.TopKInfoReplyMap;
            };
        };
        readonly LIST_WITHCOUNT: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: (this: void, rawReply: (_redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.NumberReply<number>)[]) => {
                item: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                count: _redis_client_dist_lib_RESP_types.NumberReply<number>;
            }[];
        };
        readonly listWithCount: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: (this: void, rawReply: (_redis_client_dist_lib_RESP_types.BlobStringReply<string> | _redis_client_dist_lib_RESP_types.NumberReply<number>)[]) => {
                item: _redis_client_dist_lib_RESP_types.BlobStringReply<string>;
                count: _redis_client_dist_lib_RESP_types.NumberReply<number>;
            }[];
        };
        readonly LIST: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
        };
        readonly list: {
            readonly IS_READ_ONLY: true;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BlobStringReply<string>>;
        };
        readonly QUERY: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly query: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, items: _redis_client_dist_lib_commands_generic_transformers.RedisVariadicArgument) => void;
            readonly transformReply: {
                2: (reply: _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.NumberReply<0 | 1>>) => boolean[];
                3: () => _redis_client_dist_lib_RESP_types.ArrayReply<_redis_client_dist_lib_RESP_types.BooleanReply<boolean>>;
            };
        };
        readonly RESERVE: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, topK: number, options?: _redis_bloom_dist_lib_commands_top_k_RESERVE.TopKReserveOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
        readonly reserve: {
            readonly IS_READ_ONLY: false;
            readonly parseCommand: (this: void, parser: _redis.CommandParser, key: _redis.RedisArgument, topK: number, options?: _redis_bloom_dist_lib_commands_top_k_RESERVE.TopKReserveOptions | undefined) => void;
            readonly transformReply: () => _redis_client_dist_lib_RESP_types.SimpleStringReply<"OK">;
        };
    };
} & _redis.RedisModules, _redis.RedisFunctions, _redis.RedisScripts, _redis.RespVersions, _redis.TypeMapping>;

declare function cacheCollection({ key, data, expiry, }: {
    key: string;
    data: any;
    expiry?: number;
}): Promise<void>;

export { cacheCollection, redis };
