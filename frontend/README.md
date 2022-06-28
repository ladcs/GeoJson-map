# Inicial setup:
init:
  -init react-app,
  -init eslintt.

Provider:
  -flag to logged,
  -flag map point.
# Login page

input with user and password.

# Menu
Register:
  -input to new user, password and user name.

Point:
  -register a new point,
  -register a collection of new point.

Poligonos:
  -register a new polygon,
  -register a mult-polygon.

# Map
If point true:
  -show all point in the map.

If point false:
  -show all polygons in the map.

# Point or collection points
Feature type point, GeoJson with properties name.
Feature collection with features type points.

# Polygon
Feature type polygon, GeoJson with properties name and color.