COPY citybike_stations (
    fid,
    id,
    name_fi,
    name_se,
    name_en,
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
