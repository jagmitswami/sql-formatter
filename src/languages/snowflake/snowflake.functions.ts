export const functions: string[] = [
  // https://docs.snowflake.com/en/sql-reference-functions.html
  //
  // https://docs.snowflake.com/en/sql-reference/functions-all.html
  // 1. run in console on this page: $x('//tbody/tr/*[1]//a/span/text()').map(x => x.nodeValue)
  // 2. split all lines that contain ',' or '/' into multiple lines
  // 3. remove all '— Deprecated' parts from the strings
  // 4. delete all strings that end with '<object_type>', they are already covered in the list
  // 5. remove all strings that contain '[', they are operators not functions
  // 6. fix all values that contain '*'
  // 7. delete operatos ':', '::', '||'
  //
  // Steps 1-5 can be combined by the following script in the developer console:
  // $x('//tbody/tr/*[1]//a/span/text()').map(x => x.nodeValue) // Step 1
  //   .map(x => x.split(x.includes(',') ? ',' : '/')).flat().map(x => x.trim()) // Step 2
  //   .map(x => x.replace('— Deprecated', '')) // Step 3
  //   .filter(x => !x.endsWith('<object_type>')) // Step 4
  //   .filter(x => !x.includes('[')) // Step 5
  'ABS',
  'ACOS',
  'ACOSH',
  'ADD_MONTHS',
  'ALL_USER_NAMES',
  'ANY_VALUE',
  'APPROX_COUNT_DISTINCT',
  'APPROX_PERCENTILE',
  'APPROX_PERCENTILE_ACCUMULATE',
  'APPROX_PERCENTILE_COMBINE',
  'APPROX_PERCENTILE_ESTIMATE',
  'APPROX_TOP_K',
  'APPROX_TOP_K_ACCUMULATE',
  'APPROX_TOP_K_COMBINE',
  'APPROX_TOP_K_ESTIMATE',
  'APPROXIMATE_JACCARD_INDEX',
  'APPROXIMATE_SIMILARITY',
  'ARRAY_AGG',
  'ARRAY_APPEND',
  'ARRAY_CAT',
  'ARRAY_COMPACT',
  'ARRAY_CONSTRUCT',
  'ARRAY_CONSTRUCT_COMPACT',
  'ARRAY_CONTAINS',
  'ARRAY_INSERT',
  'ARRAY_INTERSECTION',
  'ARRAY_POSITION',
  'ARRAY_PREPEND',
  'ARRAY_SIZE',
  'ARRAY_SLICE',
  'ARRAY_TO_STRING',
  'ARRAY_UNION_AGG',
  'ARRAY_UNIQUE_AGG',
  'ARRAYS_OVERLAP',
  'AS_ARRAY',
  'AS_BINARY',
  'AS_BOOLEAN',
  'AS_CHAR',
  'AS_VARCHAR',
  'AS_DATE',
  'AS_DECIMAL',
  'AS_NUMBER',
  'AS_DOUBLE',
  'AS_REAL',
  'AS_INTEGER',
  'AS_OBJECT',
  'AS_TIME',
  'AS_TIMESTAMP_LTZ',
  'AS_TIMESTAMP_NTZ',
  'AS_TIMESTAMP_TZ',
  'ASCII',
  'ASIN',
  'ASINH',
  'ATAN',
  'ATAN2',
  'ATANH',
  'AUTO_REFRESH_REGISTRATION_HISTORY',
  'AUTOMATIC_CLUSTERING_HISTORY',
  'AVG',
  'BASE64_DECODE_BINARY',
  'BASE64_DECODE_STRING',
  'BASE64_ENCODE',
  'BIT_LENGTH',
  'BITAND',
  'BITAND_AGG',
  'BITMAP_BIT_POSITION',
  'BITMAP_BUCKET_NUMBER',
  'BITMAP_CONSTRUCT_AGG',
  'BITMAP_COUNT',
  'BITMAP_OR_AGG',
  'BITNOT',
  'BITOR',
  'BITOR_AGG',
  'BITSHIFTLEFT',
  'BITSHIFTRIGHT',
  'BITXOR',
  'BITXOR_AGG',
  'BOOLAND',
  'BOOLAND_AGG',
  'BOOLNOT',
  'BOOLOR',
  'BOOLOR_AGG',
  'BOOLXOR',
  'BOOLXOR_AGG',
  'BUILD_SCOPED_FILE_URL',
  'BUILD_STAGE_FILE_URL',
  'CASE',
  'CAST',
  'CBRT',
  'CEIL',
  'CHARINDEX',
  'CHECK_JSON',
  'CHECK_XML',
  'CHR',
  'CHAR',
  'COALESCE',
  'COLLATE',
  'COLLATION',
  'COMPLETE_TASK_GRAPHS',
  'COMPRESS',
  'CONCAT',
  'CONCAT_WS',
  'CONDITIONAL_CHANGE_EVENT',
  'CONDITIONAL_TRUE_EVENT',
  'CONTAINS',
  'CONVERT_TIMEZONE',
  'COPY_HISTORY',
  'CORR',
  'COS',
  'COSH',
  'COT',
  'COUNT',
  'COUNT_IF',
  'COVAR_POP',
  'COVAR_SAMP',
  'CUME_DIST',
  'CURRENT_ACCOUNT',
  'CURRENT_AVAILABLE_ROLES',
  'CURRENT_CLIENT',
  'CURRENT_DATABASE',
  'CURRENT_DATE',
  'CURRENT_IP_ADDRESS',
  'CURRENT_REGION',
  'CURRENT_ROLE',
  'CURRENT_SCHEMA',
  'CURRENT_SCHEMAS',
  'CURRENT_SECONDARY_ROLES',
  'CURRENT_SESSION',
  'CURRENT_STATEMENT',
  'CURRENT_TASK_GRAPHS',
  'CURRENT_TIME',
  'CURRENT_TIMESTAMP',
  'CURRENT_TRANSACTION',
  'CURRENT_USER',
  'CURRENT_VERSION',
  'CURRENT_WAREHOUSE',
  'DATA_TRANSFER_HISTORY',
  'DATABASE_REFRESH_HISTORY',
  'DATABASE_REFRESH_PROGRESS',
  'DATABASE_REFRESH_PROGRESS_BY_JOB',
  'DATABASE_STORAGE_USAGE_HISTORY',
  'DATE_FROM_PARTS',
  'DATE_PART',
  'DATE_TRUNC',
  'DATEADD',
  'DATEDIFF',
  'DAYNAME',
  'DECODE',
  'DECOMPRESS_BINARY',
  'DECOMPRESS_STRING',
  'DECRYPT',
  'DECRYPT_RAW',
  'DEGREES',
  'DENSE_RANK',
  'DIV0',
  'EDITDISTANCE',
  'ENCRYPT',
  'ENCRYPT_RAW',
  'ENDSWITH',
  'EQUAL_NULL',
  'EXP',
  'EXPLAIN_JSON',
  'EXTERNAL_FUNCTIONS_HISTORY',
  'EXTERNAL_TABLE_FILES',
  'EXTERNAL_TABLE_FILE_REGISTRATION_HISTORY',
  'EXTRACT',
  'EXTRACT_SEMANTIC_CATEGORIES',
  'FACTORIAL',
  'FIRST_VALUE',
  'FLATTEN',
  'FLOOR',
  'GENERATE_COLUMN_DESCRIPTION',
  'GENERATOR',
  'GET',
  'GET_ABSOLUTE_PATH',
  'GET_DDL',
  'GET_IGNORE_CASE',
  'GET_OBJECT_REFERENCES',
  'GET_PATH',
  'GET_PRESIGNED_URL',
  'GET_RELATIVE_PATH',
  'GET_STAGE_LOCATION',
  'GETBIT',
  'GREATEST',
  'GREATEST_IGNORE_NULLS',
  'GROUPING',
  'GROUPING_ID',
  'HASH',
  'HASH_AGG',
  'HAVERSINE',
  'HEX_DECODE_BINARY',
  'HEX_DECODE_STRING',
  'HEX_ENCODE',
  'HLL',
  'HLL_ACCUMULATE',
  'HLL_COMBINE',
  'HLL_ESTIMATE',
  'HLL_EXPORT',
  'HLL_IMPORT',
  'HOUR',
  'MINUTE',
  'SECOND',
  'IFF',
  'IFNULL',
  'ILIKE',
  'ILIKE ANY',
  'INFER_SCHEMA',
  'INITCAP',
  'INSERT',
  'INVOKER_ROLE',
  'INVOKER_SHARE',
  'IS_ARRAY',
  'IS_BINARY',
  'IS_BOOLEAN',
  'IS_CHAR',
  'IS_VARCHAR',
  'IS_DATE',
  'IS_DATE_VALUE',
  'IS_DECIMAL',
  'IS_DOUBLE',
  'IS_REAL',
  'IS_GRANTED_TO_INVOKER_ROLE',
  'IS_INTEGER',
  'IS_NULL_VALUE',
  'IS_OBJECT',
  'IS_ROLE_IN_SESSION',
  'IS_TIME',
  'IS_TIMESTAMP_LTZ',
  'IS_TIMESTAMP_NTZ',
  'IS_TIMESTAMP_TZ',
  'JAROWINKLER_SIMILARITY',
  'JSON_EXTRACT_PATH_TEXT',
  'KURTOSIS',
  'LAG',
  'LAST_DAY',
  'LAST_QUERY_ID',
  'LAST_TRANSACTION',
  'LAST_VALUE',
  'LEAD',
  'LEAST',
  'LEFT',
  'LENGTH',
  'LEN',
  'LIKE',
  'LIKE ALL',
  'LIKE ANY',
  'LISTAGG',
  'LN',
  'LOCALTIME',
  'LOCALTIMESTAMP',
  'LOG',
  'LOGIN_HISTORY',
  'LOGIN_HISTORY_BY_USER',
  'LOWER',
  'LPAD',
  'LTRIM',
  'MATERIALIZED_VIEW_REFRESH_HISTORY',
  'MD5',
  'MD5_HEX',
  'MD5_BINARY',
  'MD5_NUMBER — Obsoleted',
  'MD5_NUMBER_LOWER64',
  'MD5_NUMBER_UPPER64',
  'MEDIAN',
  'MIN',
  'MAX',
  'MINHASH',
  'MINHASH_COMBINE',
  'MOD',
  'MODE',
  'MONTHNAME',
  'MONTHS_BETWEEN',
  'NEXT_DAY',
  'NORMAL',
  'NTH_VALUE',
  'NTILE',
  'NULLIF',
  'NULLIFZERO',
  'NVL',
  'NVL2',
  'OBJECT_AGG',
  'OBJECT_CONSTRUCT',
  'OBJECT_CONSTRUCT_KEEP_NULL',
  'OBJECT_DELETE',
  'OBJECT_INSERT',
  'OBJECT_KEYS',
  'OBJECT_PICK',
  'OCTET_LENGTH',
  'PARSE_IP',
  'PARSE_JSON',
  'PARSE_URL',
  'PARSE_XML',
  'PERCENT_RANK',
  'PERCENTILE_CONT',
  'PERCENTILE_DISC',
  'PI',
  'PIPE_USAGE_HISTORY',
  'POLICY_CONTEXT',
  'POLICY_REFERENCES',
  'POSITION',
  'POW',
  'POWER',
  'PREVIOUS_DAY',
  'QUERY_ACCELERATION_HISTORY',
  'QUERY_HISTORY',
  'QUERY_HISTORY_BY_SESSION',
  'QUERY_HISTORY_BY_USER',
  'QUERY_HISTORY_BY_WAREHOUSE',
  'RADIANS',
  'RANDOM',
  'RANDSTR',
  'RANK',
  'RATIO_TO_REPORT',
  'REGEXP',
  'REGEXP_COUNT',
  'REGEXP_INSTR',
  'REGEXP_LIKE',
  'REGEXP_REPLACE',
  'REGEXP_SUBSTR',
  'REGEXP_SUBSTR_ALL',
  'REGR_AVGX',
  'REGR_AVGY',
  'REGR_COUNT',
  'REGR_INTERCEPT',
  'REGR_R2',
  'REGR_SLOPE',
  'REGR_SXX',
  'REGR_SXY',
  'REGR_SYY',
  'REGR_VALX',
  'REGR_VALY',
  'REPEAT',
  'REPLACE',
  'REPLICATION_GROUP_REFRESH_HISTORY',
  'REPLICATION_GROUP_REFRESH_PROGRESS',
  'REPLICATION_GROUP_REFRESH_PROGRESS_BY_JOB',
  'REPLICATION_GROUP_USAGE_HISTORY',
  'REPLICATION_USAGE_HISTORY',
  'REST_EVENT_HISTORY',
  'RESULT_SCAN',
  'REVERSE',
  'RIGHT',
  'RLIKE',
  'ROUND',
  'ROW_NUMBER',
  'RPAD',
  'RTRIM',
  'RTRIMMED_LENGTH',
  'SEARCH_OPTIMIZATION_HISTORY',
  'SEQ1',
  'SEQ2',
  'SEQ4',
  'SEQ8',
  'SERVERLESS_TASK_HISTORY',
  'SHA1',
  'SHA1_HEX',
  'SHA1_BINARY',
  'SHA2',
  'SHA2_HEX',
  'SHA2_BINARY',
  'SIGN',
  'SIN',
  'SINH',
  'SKEW',
  'SOUNDEX',
  'SPACE',
  'SPLIT',
  'SPLIT_PART',
  'SPLIT_TO_TABLE',
  'SQRT',
  'SQUARE',
  'ST_AREA',
  'ST_ASEWKB',
  'ST_ASEWKT',
  'ST_ASGEOJSON',
  'ST_ASWKB',
  'ST_ASBINARY',
  'ST_ASWKT',
  'ST_ASTEXT',
  'ST_AZIMUTH',
  'ST_CENTROID',
  'ST_COLLECT',
  'ST_CONTAINS',
  'ST_COVEREDBY',
  'ST_COVERS',
  'ST_DIFFERENCE',
  'ST_DIMENSION',
  'ST_DISJOINT',
  'ST_DISTANCE',
  'ST_DWITHIN',
  'ST_ENDPOINT',
  'ST_ENVELOPE',
  'ST_GEOGFROMGEOHASH',
  'ST_GEOGPOINTFROMGEOHASH',
  'ST_GEOGRAPHYFROMWKB',
  'ST_GEOGRAPHYFROMWKT',
  'ST_GEOHASH',
  'ST_GEOMETRYFROMWKB',
  'ST_GEOMETRYFROMWKT',
  'ST_HAUSDORFFDISTANCE',
  'ST_INTERSECTION',
  'ST_INTERSECTS',
  'ST_LENGTH',
  'ST_MAKEGEOMPOINT',
  'ST_GEOM_POINT',
  'ST_MAKELINE',
  'ST_MAKEPOINT',
  'ST_POINT',
  'ST_MAKEPOLYGON',
  'ST_POLYGON',
  'ST_NPOINTS',
  'ST_NUMPOINTS',
  'ST_PERIMETER',
  'ST_POINTN',
  'ST_SETSRID',
  'ST_SIMPLIFY',
  'ST_SRID',
  'ST_STARTPOINT',
  'ST_SYMDIFFERENCE',
  'ST_UNION',
  'ST_WITHIN',
  'ST_X',
  'ST_XMAX',
  'ST_XMIN',
  'ST_Y',
  'ST_YMAX',
  'ST_YMIN',
  'STAGE_DIRECTORY_FILE_REGISTRATION_HISTORY',
  'STAGE_STORAGE_USAGE_HISTORY',
  'STARTSWITH',
  'STDDEV',
  'STDDEV_POP',
  'STDDEV_SAMP',
  'STRIP_NULL_VALUE',
  'STRTOK',
  'STRTOK_SPLIT_TO_TABLE',
  'STRTOK_TO_ARRAY',
  'SUBSTR',
  'SUBSTRING',
  'SUM',
  'SYSDATE',
  'SYSTEM$ABORT_SESSION',
  'SYSTEM$ABORT_TRANSACTION',
  'SYSTEM$AUTHORIZE_PRIVATELINK',
  'SYSTEM$AUTHORIZE_STAGE_PRIVATELINK_ACCESS',
  'SYSTEM$BEHAVIOR_CHANGE_BUNDLE_STATUS',
  'SYSTEM$CANCEL_ALL_QUERIES',
  'SYSTEM$CANCEL_QUERY',
  'SYSTEM$CLUSTERING_DEPTH',
  'SYSTEM$CLUSTERING_INFORMATION',
  'SYSTEM$CLUSTERING_RATIO ',
  'SYSTEM$CURRENT_USER_TASK_NAME',
  'SYSTEM$DATABASE_REFRESH_HISTORY ',
  'SYSTEM$DATABASE_REFRESH_PROGRESS',
  'SYSTEM$DATABASE_REFRESH_PROGRESS_BY_JOB ',
  'SYSTEM$DISABLE_BEHAVIOR_CHANGE_BUNDLE',
  'SYSTEM$DISABLE_DATABASE_REPLICATION',
  'SYSTEM$ENABLE_BEHAVIOR_CHANGE_BUNDLE',
  'SYSTEM$ESTIMATE_QUERY_ACCELERATION',
  'SYSTEM$ESTIMATE_SEARCH_OPTIMIZATION_COSTS',
  'SYSTEM$EXPLAIN_JSON_TO_TEXT',
  'SYSTEM$EXPLAIN_PLAN_JSON',
  'SYSTEM$EXTERNAL_TABLE_PIPE_STATUS',
  'SYSTEM$GENERATE_SAML_CSR',
  'SYSTEM$GENERATE_SCIM_ACCESS_TOKEN',
  'SYSTEM$GET_AWS_SNS_IAM_POLICY',
  'SYSTEM$GET_PREDECESSOR_RETURN_VALUE',
  'SYSTEM$GET_PRIVATELINK',
  'SYSTEM$GET_PRIVATELINK_AUTHORIZED_ENDPOINTS',
  'SYSTEM$GET_PRIVATELINK_CONFIG',
  'SYSTEM$GET_SNOWFLAKE_PLATFORM_INFO',
  'SYSTEM$GET_TAG',
  'SYSTEM$GET_TAG_ALLOWED_VALUES',
  'SYSTEM$GET_TAG_ON_CURRENT_COLUMN',
  'SYSTEM$GET_TAG_ON_CURRENT_TABLE',
  'SYSTEM$GLOBAL_ACCOUNT_SET_PARAMETER',
  'SYSTEM$LAST_CHANGE_COMMIT_TIME',
  'SYSTEM$LINK_ACCOUNT_OBJECTS_BY_NAME',
  'SYSTEM$MIGRATE_SAML_IDP_REGISTRATION',
  'SYSTEM$PIPE_FORCE_RESUME',
  'SYSTEM$PIPE_STATUS',
  'SYSTEM$REVOKE_PRIVATELINK',
  'SYSTEM$REVOKE_STAGE_PRIVATELINK_ACCESS',
  'SYSTEM$SET_RETURN_VALUE',
  'SYSTEM$SHOW_OAUTH_CLIENT_SECRETS',
  'SYSTEM$STREAM_GET_TABLE_TIMESTAMP',
  'SYSTEM$STREAM_HAS_DATA',
  'SYSTEM$TASK_DEPENDENTS_ENABLE',
  'SYSTEM$TYPEOF',
  'SYSTEM$USER_TASK_CANCEL_ONGOING_EXECUTIONS',
  'SYSTEM$VERIFY_EXTERNAL_OAUTH_TOKEN',
  'SYSTEM$WAIT',
  'SYSTEM$WHITELIST',
  'SYSTEM$WHITELIST_PRIVATELINK',
  'TAG_REFERENCES',
  'TAG_REFERENCES_ALL_COLUMNS',
  'TAG_REFERENCES_WITH_LINEAGE',
  'TAN',
  'TANH',
  'TASK_DEPENDENTS',
  'TASK_HISTORY',
  'TIME_FROM_PARTS',
  'TIME_SLICE',
  'TIMEADD',
  'TIMEDIFF',
  'TIMESTAMP_FROM_PARTS',
  'TIMESTAMPADD',
  'TIMESTAMPDIFF',
  'TO_ARRAY',
  'TO_BINARY',
  'TO_BOOLEAN',
  'TO_CHAR',
  'TO_VARCHAR',
  'TO_DATE',
  'DATE',
  'TO_DECIMAL',
  'TO_NUMBER',
  'TO_NUMERIC',
  'TO_DOUBLE',
  'TO_GEOGRAPHY',
  'TO_GEOMETRY',
  'TO_JSON',
  'TO_OBJECT',
  'TO_TIME',
  'TIME',
  'TO_TIMESTAMP',
  'TO_TIMESTAMP_LTZ',
  'TO_TIMESTAMP_NTZ',
  'TO_TIMESTAMP_TZ',
  'TO_VARIANT',
  'TO_XML',
  'TRANSLATE',
  'TRIM',
  'TRUNCATE',
  'TRUNC',
  'TRUNC',
  'TRY_BASE64_DECODE_BINARY',
  'TRY_BASE64_DECODE_STRING',
  'TRY_CAST',
  'TRY_HEX_DECODE_BINARY',
  'TRY_HEX_DECODE_STRING',
  'TRY_PARSE_JSON',
  'TRY_TO_BINARY',
  'TRY_TO_BOOLEAN',
  'TRY_TO_DATE',
  'TRY_TO_DECIMAL',
  'TRY_TO_NUMBER',
  'TRY_TO_NUMERIC',
  'TRY_TO_DOUBLE',
  'TRY_TO_GEOGRAPHY',
  'TRY_TO_GEOMETRY',
  'TRY_TO_TIME',
  'TRY_TO_TIMESTAMP',
  'TRY_TO_TIMESTAMP_LTZ',
  'TRY_TO_TIMESTAMP_NTZ',
  'TRY_TO_TIMESTAMP_TZ',
  'TYPEOF',
  'UNICODE',
  'UNIFORM',
  'UPPER',
  'UUID_STRING',
  'VALIDATE',
  'VALIDATE_PIPE_LOAD',
  'VAR_POP',
  'VAR_SAMP',
  'VARIANCE',
  'VARIANCE_SAMP',
  'VARIANCE_POP',
  'WAREHOUSE_LOAD_HISTORY',
  'WAREHOUSE_METERING_HISTORY',
  'WIDTH_BUCKET',
  'XMLGET',
  'YEAR',
  'YEAROFWEEK',
  'YEAROFWEEKISO',
  'DAY',
  'DAYOFMONTH',
  'DAYOFWEEK',
  'DAYOFWEEKISO',
  'DAYOFYEAR',
  'WEEK',
  'WEEK',
  'WEEKOFYEAR',
  'WEEKISO',
  'MONTH',
  'QUARTER',
  'ZEROIFNULL',
  'ZIPF',
];
