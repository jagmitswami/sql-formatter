import { flatKeywordList } from '../../utils';

export const keywords = flatKeywordList({
  // https://www.ibm.com/docs/en/db2-for-zos/11?topic=words-reserved#db2z_reservedwords__newresword
  standard: [
    'ALL',
    'ALLOCATE',
    'ALLOW',
    'ALTERAND',
    'ANY',
    'AS',
    'ARRAY',
    'ARRAY_EXISTS',
    'ASENSITIVE',
    'ASSOCIATE',
    'ASUTIME',
    'AT',
    'AUDIT',
    'AUX',
    'AUXILIARY',
    'BEFORE',
    'BEGIN',
    'BETWEEN',
    'BUFFERPOOL',
    'BY',
    'CAPTURE',
    'CASCADED',
    // 'CAST',
    'CCSID',
    'CHARACTER',
    'CHECK',
    'CLONE',
    'CLUSTER',
    'COLLECTION',
    'COLLID',
    'COLUMN',
    'CONDITION',
    'CONNECTION',
    'CONSTRAINT',
    'CONTENT',
    'CONTINUE',
    'CREATE',
    'CUBE',
    'CURRENT',
    'CURRENT_DATE',
    'CURRENT_LC_CTYPE',
    'CURRENT_PATH',
    'CURRENT_SCHEMA',
    'CURRENT_TIME',
    'CURRENT_TIMESTAMP',
    'CURRVAL',
    'CURSOR',
    'DATA',
    'DATABASE',
    'DBINFO',
    'DECLARE',
    'DEFAULT',
    'DESCRIPTOR',
    'DETERMINISTIC',
    'DISABLE',
    'DISALLOW',
    'DISTINCT',
    'DO',
    'DOCUMENT',
    'DSSIZE',
    'DYNAMIC',
    'EDITPROC',
    'ENCODING',
    'ENCRYPTION',
    'ENDING',
    'END-EXEC',
    'ERASE',
    'ESCAPE',
    'EXCEPTION',
    'EXISTS',
    'EXIT',
    'EXTERNAL',
    'FENCED',
    'FIELDPROC',
    'FINAL',
    'FIRST',
    'FOR',
    'FREE',
    'FULL',
    'FUNCTION',
    'GENERATED',
    'GET',
    'GLOBAL',
    'GOTO',
    'GROUP',
    'HANDLER',
    'HOLD',
    'HOURS',
    'IF',
    'IMMEDIATE',
    'IN',
    'INCLUSIVE',
    'INDEX',
    'INHERIT',
    'INNER',
    'INOUT',
    'INSENSITIVE',
    'INTO',
    'IS',
    'ISOBID',
    'ITERATE',
    'JAR',
    'KEEP',
    'KEY',
    'LANGUAGE',
    'LAST',
    'LC_CTYPE',
    'LEAVE',
    'LIKE',
    'LOCAL',
    'LOCALE',
    'LOCATOR',
    'LOCATORS',
    'LOCK',
    'LOCKMAX',
    'LOCKSIZE',
    'LONG',
    'LOOP',
    'MAINTAINED',
    'MATERIALIZED',
    'MICROSECONDS',
    'MINUTEMINUTES',
    'MODIFIES',
    'MONTHS',
    'NEXT',
    'NEXTVAL',
    'NO',
    'NONE',
    'NOT',
    'NULL',
    'NULLS',
    'NUMPARTS',
    'OBID',
    'OF',
    'OLD',
    'ON DELETE',
    'ON UPDATE',
    'OPTIMIZATION',
    'OPTIMIZE',
    'ORDER',
    'ORGANIZATION',
    'OUT',
    'OUTER',
    'PACKAGE',
    'PARAMETER',
    'PART',
    'PADDED',
    'PARTITION',
    'PARTITIONED',
    'PARTITIONING',
    'PATH',
    'PIECESIZE',
    'PERIOD',
    'PLAN',
    'PRECISION',
    'PREVVAL',
    'PRIOR',
    'PRIQTY',
    'PRIVILEGES',
    'PROCEDURE',
    'PROGRAM',
    'PSID',
    'PUBLIC',
    'QUERY',
    'QUERYNO',
    'READS',
    'REFERENCES',
    'RESIGNAL',
    'RESTRICT',
    'RESULT',
    'RESULT_SET_LOCATOR',
    'RETURN',
    'RETURNS',
    'ROLE',
    'ROLLUP',
    'ROUND_CEILING',
    'ROUND_DOWN',
    'ROUND_FLOOR',
    'ROUND_HALF_DOWN',
    'ROUND_HALF_EVEN',
    'ROUND_HALF_UP',
    'ROUND_UP',
    'ROW',
    'ROWSET',
    'SCHEMA',
    'SCRATCHPAD',
    'SECONDS',
    'SECQTY',
    'SECURITY',
    'SEQUENCE',
    'SENSITIVE',
    'SESSION_USER',
    'SIMPLE',
    'SOME',
    'SOURCE',
    'SPECIFIC',
    'STANDARD',
    'STATIC',
    'STATEMENT',
    'STAY',
    'STOGROUP',
    'STORES',
    'STYLE',
    'SUMMARY',
    'SYNONYM',
    'SYSDATE',
    'SYSTEM',
    'SYSTIMESTAMP',
    'TABLE',
    'TABLESPACE',
    'THEN',
    'TO',
    'TRIGGER',
    'TYPE',
    'UNDO',
    'UNIQUE',
    'UNTIL',
    'USER',
    'VALIDPROC',
    'VARIABLE',
    'VARIANT',
    'VCAT',
    'VERSIONING',
    'VIEW',
    'VOLATILE',
    'VOLUMES',
    'WHILE',
    'WLM',
    'XMLEXISTS',
    'XMLCAST',
    'YEARS',
    'ZONE',
  ],
  // https://www.ibm.com/docs/en/db2-for-zos/11?topic=utilities-db2-online
  onlineUtilies: [
    'BACKUP SYSTEM',
    'CATENFM',
    'CATMAINT',
    'CHECK DATA',
    'CHECK INDEX',
    'CHECK LOB',
    'COPY',
    'COPYTOCOPY',
    'DIAGNOSE',
    'EXEC SQL',
    'LISTDEF',
    'LOAD',
    'MERGECOPY',
    'MODIFY RECOVERY',
    'MODIFY STATISTICS',
    'OPTIONS',
    'QUIESCE',
    'REBUILD INDEX',
    'RECOVER',
    'REORG INDEX',
    'REORG TABLESPACE',
    'REPAIR',
    'REPORT',
    'RESTORE SYSTEM',
    'RUNSTATS',
    'STOSPACE',
    'TEMPLATE',
    'UNLOAD',
  ],
  // https://www.ibm.com/docs/en/db2-for-zos/11?topic=db2-commands
  commands: [
    'ABEND',
    'ACCESS DATABASE',
    'ALTER BUFFERPOOL',
    'ALTER GROUPBUFFERPOOL',
    'ALTER UTILITY',
    'ARCHIVE LOG',
    'BIND PACKAGE',
    'BIND PLAN',
    'BIND QUERY',
    'BIND SERVICE',
    'BIND',
    'REBIND',
    'CANCEL THREAD',
    'DCLGEN',
    'DISPLAY ACCEL',
    'DISPLAY ARCHIVE',
    'DISPLAY BLOCKERS',
    'DISPLAY BUFFERPOOL',
    'DISPLAY DATABASE',
    'DISPLAY DDF',
    'DISPLAY FUNCTION SPECIFIC',
    'DISPLAY GROUP',
    'DISPLAY GROUPBUFFERPOOL',
    'DISPLAY LOCATION',
    'DISPLAY LOG',
    'DISPLAY PROCEDURE',
    'DISPLAY PROFILE',
    'DISPLAY RLIMIT',
    'DISPLAY RESTSVC',
    'DISPLAY THREAD',
    'DISPLAY TRACE',
    'DISPLAY UTILITY',
    'DSN',
    'DSNH',
    'FREE PACKAGE',
    'FREE PLAN',
    'FREE QUERY',
    'FREE SERVICE',
    'MODIFY admtproc,APPL=SHUTDOWN',
    'MODIFY admtproc,APPL=TRACE',
    'MODIFY DDF',
    'MODIFY irlmproc,ABEND',
    'MODIFY irlmproc,DIAG',
    'MODIFY irlmproc,PURGE',
    'MODIFY irlmproc,SET',
    'MODIFY irlmproc,STATUS',
    'MODIFY TRACE',
    'REBIND PACKAGE',
    'REBIND PLAN',
    'REBIND TRIGGER PACKAGE',
    'RECOVER BSDS',
    'RECOVER INDOUBT',
    'RECOVER POSTPONED',
    'REFRESH DB2,EARLY',
    'RESET GENERICLU',
    'RESET INDOUBT',
    'RUN',
    'SET ARCHIVE',
    'SET LOG',
    'SET SYSPARM',
    'SPUFI',
    'START ACCEL',
    'START admtproc',
    'START CDDS',
    'START DATABASE',
    'START DB2',
    'START DDF',
    'START FUNCTION SPECIFIC',
    'START irlmproc',
    'START PROCEDURE',
    'START PROFILE',
    'START RLIMIT',
    'START RESTSVC',
    'START TRACE',
    'STOP ACCEL',
    'STOP admtproc',
    'STOP CDDS',
    'STOP DATABASE',
    'STOP DB2',
    'STOP DDF',
    'STOP FUNCTION SPECIFIC',
    'STOP irlmproc',
    'STOP PROCEDURE',
    'STOP PROFILE',
    'STOP RLIMIT',
    'STOP RESTSVC',
    'STOP TRACE',
    'TERM UTILITY',
    'TRACE CT',
  ],
});
