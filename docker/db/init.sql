drop database if exists sample;
create database sample;
use sample;
drop table if exists users;
create table users (id int, name varchar(10));
insert into users values (1, "太郎"),(2, "二郎");