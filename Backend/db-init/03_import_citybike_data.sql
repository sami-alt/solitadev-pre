COPY journeys (
    fid,
    id,
    name_se,
    name_fi,
    address_fi,
    address_se,
    city_fi,
    city_se,
    operator,
    capacity,
    x,
    y
)
FROM '/data/Helsingin_ja_Espoon_kaupunkipyoraasemat_avoin.csv'
DELIMITER ','
CSV HEADER;
