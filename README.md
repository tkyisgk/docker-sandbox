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

# コンテナの状態を確認（appとdbが立ち上がる）
$ docker-compose ps -a

# MYSQLに潜入
$ docker-compose exec db bash
$ mysql -u root -ppassword

# nodeサーバーに潜入
$ docker-compose exec app bash
```

## 確認
* nodeサーバーを起動している状態で、http://0.0.0.0:3000/ にアクセスするとMYSQLのデータが表示される。

## これから
* フロントのフレームワークとかも、dockerで一元管理したいね。

## Dockerコンテナ削除

``` bash
# コンテナ全て表示して、コンテナIDを取得
$ docker ps -a

# バルス！
$ docker rm <コンテナID>
```