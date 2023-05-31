COPY journeys (
    departure,
    "return",
    departure_station_id,
    departure_station_name,
    return_station_id,
    return_station_name,
    covered_distance,
    duration_sec
)
FROM '/data/2021-05.csv'
DELIMITER ','
CSV HEADER;

COPY journeys (
    departure,
    "return",
    departure_station_id,
    departure_station_name,
    return_station_id,
    return_station_name,
    covered_distance,
    duration_sec
)
FROM '/data/2021-06.csv'
DELIMITER ','
CSV HEADER;

COPY journeys (
    departure,
    "return",
    departure_station_id,
    departure_station_name,
    return_station_id,
    return_station_name,
    covered_distance,
    duration_sec
)
FROM '/data/2021-07.csv'
DELIMITER ','
CSV HEADER;

