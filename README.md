The aim of this project is to address this issue [2]. Here, you can find some scripts to compressed gpx files and create shapes.txt in the GTFS format.

# Directory structure

* bin: some useful scripts
* compressed: gpx files compressed using [1]
* raw: original gpx files from http://dati.comune.matera.it/dataset/osm-challenges


# Configuring your environment

* Install python libraries
* Install npm


# Create shapes.txt

You can do the work by hand invoking gpx_reduce.py or you can simply run grunt in the current directory.

Gruntfile takes files located in raw directory and it attempts to compress them. You can drop there other files and the script will compress them, too.


# TODOS

* clean Gruntfile.js
* better documentation


# References

[1] http://wiki.openstreetmap.org/wiki/User:Travelling_salesman/gpx_reduce
[2] https://github.com/unmonastery/matera-gtfs/issues/1