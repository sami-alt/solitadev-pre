-- Remove some rows from the data that are not needed

delete from journeys
where covered_distance < 10
or duration_sec < 10;
