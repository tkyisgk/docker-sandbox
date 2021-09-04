# Docker sandbox

## やること
* DB/nodeサーバーを立ち上げる。
* nodeサーバーにアクセスした時に、データベースから値を取得してループで表示する。

## required
* Node: 12.20.1
* Docker: 20.10.6

## setup

``` bash
# docker composeの立ち上げ
$ docker-compose up

# 起動中のコンテナを確認（appとdbが立ち上がる）
$ docker-compose ps

# MYSQLに潜入して、必要なデータを追加
$ docker-compose exec db bash
$ mysql -u root -ppassword

# データベースを作成
$ create database sample;

# テーブルを作成
$ create table users (id int);

# データを投入
$ insert into users values (1),(2);

# MYSQL撤退
$ exit

# nodeサーバーに潜入
$ docker-compose exec app bash

# moduleインストール
$ npm install

# index.jsを実行
$ npx node index.js
```

## 確認
* nodeサーバーを起動している状態で、http://0.0.0.0:3000/ にアクセスするとMYSQLのデータが表示される。

## これから
* MYSQLのデータの永続化とかをやっていきたいね。
* フロントのフレームワークとかも、dockerで一元管理したいね。

## Dockerコンテナ削除

``` bash
# コンテナ全て表示して、コンテナIDを取得
$ docker ps -a

# バルス！
$ docker rm <コンテナID>
```