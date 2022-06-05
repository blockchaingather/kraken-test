CREATE DATABASE if not exists `kraken_test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

use kraken_test;

CREATE TABLE if not exists `kraken_transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `involves_watch_only` tinyint(1) DEFAULT '0' COMMENT '0=FALSE 1=TRUE',
  `account` varchar(80) DEFAULT '' COMMENT 'account',
  `address` varchar(80) DEFAULT '' COMMENT 'address',
  `category` varchar(40) DEFAULT '' COMMENT 'category',
  `amount` varchar(400) DEFAULT '' COMMENT 'amount',
  `label` varchar(80) DEFAULT '' COMMENT 'label',
  `confirmations` int DEFAULT '0' COMMENT 'confirmations',
  `blockhash` varchar(400) DEFAULT '' COMMENT 'blockhash',
  `blockindex` int DEFAULT '0' COMMENT 'blockindex',
  `blocktime` bigint DEFAULT '0' COMMENT 'blocktime',
  `txid` varchar(400) DEFAULT '' COMMENT 'txid',
  `vout` int DEFAULT '0' COMMENT 'vout',
  `time` bigint DEFAULT '0' COMMENT 'blocktime',
  `timereceived` bigint DEFAULT '0' COMMENT 'blocktime',
  `bip125_replaceable` varchar(40) DEFAULT '' COMMENT 'bip125 replaceable',
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'time stamp',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='kraken transactions table';