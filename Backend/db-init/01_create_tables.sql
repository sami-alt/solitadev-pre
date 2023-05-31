create table citybike_stations (
    id int not null primary key,
    fid int not null,
    name_fi text not null,
    name_se text not null,
    name_en text not null,
    address_fi text not null,
    address_se text not null,
    city_fi text not null,
    city_se text not null,
    operator text not null,
    capacity int not null,
    x float not null,
    y float not null
);

create table journeys (
    "id" int generated always as identity primary key,
    departure timestamp not null,
    "return" timestamp not null,
    departure_station_id int not null,
    departure_station_name text not null,
    -- Note: normally we'd add "references citybike_stations" here,
    -- but the journey data has references to stations that are missing
    -- from the station data
    return_station_id int not null,
    return_station_name text not null,
    covered_distance float null,
    duration_sec int not null
);

create index journeys_departure_station_id on journeys ("departure_station_id");
create index journeys_return_station_id on journeys ("return_station_id");
