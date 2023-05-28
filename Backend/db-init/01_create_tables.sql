create table journeys (
    "id" int generated always as identity primary key,
    departure timestamp not null,
    "return" timestamp not null,
    departure_station_id int not null,
    departure_station_name text not null,
    return_station_id int not null,
    return_station_name text not null,
    covered_distance float null,
    duration_sec int not null
);

create table citybike_stations (
    fid int not null primary key,
    id int not null,
    name_se text not null,
    name_fi text not null,
    address_fi text not null,
    address_se text not null,
    city_fi text not null,
    city_se text not null,
    operator text not null,
    capacity int not null,
    x float not null,
    y float not null
);
