import Formatter from 'src/core/Formatter';
import Tokenizer from 'src/core/Tokenizer';
import { dedupe } from 'src/utils';

/**
 * Priority 5 (last)
 * Full list of reserved words
 * any words that are in a higher priority are removed
 */
// https://jakewheat.github.io/sql-overview/sql-2008-foundation-grammar.html#reserved-word
const reservedKeywords = [
  'ABS',
  'ALL',
  'ALLOCATE',
  'ALTER',
  'ANY',
  'ARE',
  'ARRAY',
  'AS',
  'ASENSITIVE',
  'ASYMMETRIC',
  'AT',
  'ATOMIC',
  'AUTHORIZATION',
  'AVG',
  'BEGIN',
  'BETWEEN',
  'BIGINT',
  'BINARY',
  'BLOB',
  'BOOLEAN',
  'BOTH',
  'BY',
  'CALL',
  'CALLED',
  'CARDINALITY',
  'CASCADED',
  'CAST',
  'CEIL',
  'CEILING',
  'CHAR',
  'CHARACTER',
  'CHARACTER_LENGTH',
  'CHAR_LENGTH',
  'CHECK',
  'CLOB',
  'CLOSE',
  'COALESCE',
  'COLLATE',
  'COLLECT',
  'COLUMN',
  'COMMIT',
  'CONDITION',
  'CONNECT',
  'CONSTRAINT',
  'CONVERT',
  'CORR',
  'CORRESPONDING',
  'COUNT',
  'COVAR_POP',
  'COVAR_SAMP',
  'CREATE',
  'CROSS',
  'CUBE',
  'CUME_DIST',
  'CURRENT',
  'CURRENT_CATALOG',
  'CURRENT_DATE',
  'CURRENT_DEFAULT_TRANSFORM_GROUP',
  'CURRENT_PATH',
  'CURRENT_ROLE',
  'CURRENT_SCHEMA',
  'CURRENT_TIME',
  'CURRENT_TIMESTAMP',
  'CURRENT_TRANSFORM_GROUP_FOR_TYPE',
  'CURRENT_USER',
  'CURSOR',
  'CYCLE',
  'DATE',
  'DAY',
  'DEALLOCATE',
  'DEC',
  'DECIMAL',
  'DECLARE',
  'DEFAULT',
  'DELETE',
  'DENSE_RANK',
  'DEREF',
  'DESCRIBE',
  'DETERMINISTIC',
  'DISCONNECT',
  'DISTINCT',
  'DOUBLE',
  'DROP',
  'DYNAMIC',
  'EACH',
  'ELEMENT',
  'END-EXEC',
  'ESCAPE',
  'EVERY',
  'EXCEPT',
  'EXEC',
  'EXECUTE',
  'EXISTS',
  'EXP',
  'EXTERNAL',
  'EXTRACT',
  'FALSE',
  'FETCH',
  'FILTER',
  'FLOAT',
  'FLOOR',
  'FOR',
  'FOREIGN',
  'FREE',
  'FROM',
  'FULL',
  'FUNCTION',
  'FUSION',
  'GET',
  'GLOBAL',
  'GRANT',
  'GROUP',
  'GROUPING',
  'HAVING',
  'HOLD',
  'HOUR',
  'IDENTITY',
  'IN',
  'INDICATOR',
  'INNER',
  'INOUT',
  'INSENSITIVE',
  'INSERT',
  'INT',
  'INTEGER',
  'INTERSECT',
  'INTERSECTION',
  'INTERVAL',
  'INTO',
  'IS',
  'LANGUAGE',
  'LARGE',
  'LATERAL',
  'LEADING',
  'LEFT',
  'LIKE',
  'LIKE_REGEX',
  'LN',
  'LOCAL',
  'LOCALTIME',
  'LOCALTIMESTAMP',
  'LOWER',
  'MATCH',
  'MAX',
  'MEMBER',
  'MERGE',
  'METHOD',
  'MIN',
  'MINUTE',
  'MOD',
  'MODIFIES',
  'MODULE',
  'MONTH',
  'MULTISET',
  'NATIONAL',
  'NATURAL',
  'NCHAR',
  'NCLOB',
  'NEW',
  'NO',
  'NONE',
  'NORMALIZE',
  'NOT',
  'NULL',
  'NULLIF',
  'NUMERIC',
  'OCCURRENCES_REGEX',
  'OCTET_LENGTH',
  'OF',
  'OLD',
  'ON DELETE',
  'ON UPDATE',
  'ONLY',
  'OPEN',
  'ORDER',
  'OUT',
  'OUTER',
  'OVER',
  'OVERLAPS',
  'OVERLAY',
  'PARAMETER',
  'PARTITION',
  'PERCENTILE_CONT',
  'PERCENTILE_DISC',
  'PERCENT_RANK',
  'POSITION',
  'POSITION_REGEX',
  'POWER',
  'PRECISION',
  'PREPARE',
  'PRIMARY',
  'PROCEDURE',
  'RANGE',
  'RANK',
  'READS',
  'REAL',
  'RECURSIVE',
  'REF',
  'REFERENCES',
  'REFERENCING',
  'REGR_AVGX',
  'REGR_AVGY',
  'REGR_COUNT',
  'REGR_INTERCEPT',
  'REGR_R2',
  'REGR_SLOPE',
  'REGR_SXX',
  'REGR_SXY',
  'REGR_SYY',
  'RELEASE',
  'RESULT',
  'RETURN',
  'RETURNS',
  'REVOKE',
  'RIGHT',
  'ROLLBACK',
  'ROLLUP',
  'ROW',
  'ROWS',
  'ROW_NUMBER',
  'SAVEPOINT',
  'SCOPE',
  'SCROLL',
  'SEARCH',
  'SECOND',
  'SELECT',
  'SENSITIVE',
  'SESSION_USER',
  'SET',
  'SIMILAR',
  'SMALLINT',
  'SOME',
  'SPECIFIC',
  'SPECIFICTYPE',
  'SQL',
  'SQLEXCEPTION',
  'SQLSTATE',
  'SQLWARNING',
  'SQRT',
  'START',
  'STATIC',
  'STDDEV_POP',
  'STDDEV_SAMP',
  'SUBMULTISET',
  'SUBSTRING',
  'SUBSTRING_REGEX',
  'SUM',
  'SYMMETRIC',
  'SYSTEM',
  'SYSTEM_USER',
  'TABLE',
  'TABLESAMPLE',
  'THEN',
  'TIME',
  'TIMESTAMP',
  'TIMEZONE_HOUR',
  'TIMEZONE_MINUTE',
  'TO',
  'TRAILING',
  'TRANSLATE',
  'TRANSLATE_REGEX',
  'TRANSLATION',
  'TREAT',
  'TRIGGER',
  'TRIM',
  'TRUE',
  'UESCAPE',
  'UNION',
  'UNIQUE',
  'UNKNOWN',
  'UNNEST',
  'UPDATE',
  'UPPER',
  'USER',
  'VALUE',
  'VALUES',
  'VARBINARY',
  'VARCHAR',
  'VARYING',
  'VAR_POP',
  'VAR_SAMP',
  'WHENEVER',
  'WIDTH_BUCKET',
  'WINDOW',
  'WITHIN',
  'WITHOUT',
  'YEAR',
];

/**
 * Priority 1 (first)
 * keywords that begin a new statement
 * will begin new indented block
 */
const reservedCommands = [
  'ADD',
  'ALTER COLUMN',
  'ALTER TABLE',
  'CREATE TABLE',
  'DROP TABLE',
  'DELETE FROM',
  'FETCH FIRST',
  'FETCH NEXT',
  'FETCH PRIOR',
  'FETCH LAST',
  'FETCH ABSOLUTE',
  'FETCH RELATIVE',
  'FROM',
  'GROUP BY',
  'HAVING',
  'INSERT INTO',
  'LIMIT',
  'OFFSET',
  'ORDER BY',
  'SELECT',
  'SET SCHEMA',
  'SET',
  'UPDATE',
  'VALUES',
  'WHERE',
  'WITH',
];

/**
 * Priority 2
 * commands that operate on two tables or subqueries
 * two main categories: joins and boolean set operators
 */
const reservedBinaryCommands = [
  // set booleans
  'INTERSECT',
  'INTERSECT ALL',
  'INTERSECT DISTINCT',
  'UNION',
  'UNION ALL',
  'UNION DISTINCT',
  'EXCEPT',
  'EXCEPT ALL',
  'EXCEPT DISTINCT',
  // joins
  'JOIN',
  'INNER JOIN',
  'LEFT JOIN',
  'LEFT OUTER JOIN',
  'RIGHT JOIN',
  'RIGHT OUTER JOIN',
  'FULL JOIN',
  'FULL OUTER JOIN',
  'CROSS JOIN',
  'NATURAL JOIN',
];

/**
 * Priority 3
 * keywords that follow a previous Statement, must be attached to subsequent data
 * can be fully inline or on newline with optional indent
 */
const reservedDependentClauses = ['WHEN', 'ELSE'];

export default class SqlFormatter extends Formatter {
  static operators = [];

  tokenizer() {
    return new Tokenizer({
      reservedCommands,
      reservedBinaryCommands,
      reservedDependentClauses,
      reservedKeywords: dedupe(reservedKeywords),
      stringTypes: ["''", { prefix: 'X', quote: "''" }],
      identifierTypes: [`""`, '``'],
      positionalPlaceholders: true,
    });
  }
}
