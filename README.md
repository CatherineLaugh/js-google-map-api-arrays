# Learn the Google Maps API

Congratulations on making it this far! In this open ended lab you'll be learning to use the Google Maps API to place pins on a map. Before moving on, think about a list of places you'd like to map out. Some examples:

* A travel log: Places you've been and places you want to go.
* Your favorite restaurants
* Locations that are of personal significance to you in your life
* Locations where there is major world news occurring.

We're going to programmatically build this map out (and then have plenty of time for tinkering) using the Google Maps API (an API, or Application Programming Interface is a way for developers to connect to apps and bring their data into their own programs).

**Fork and clone this repo** to get the starter code. You'll notice that we have an `index.html` file where we'll be displaying our map, and a `script.js` file where we'll be writing our javascript that manipulates the map using the API. In `index.html` you'll see that the `<head>` contains a `<script>` tag linking to the google maps API.

```html
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=your-API-Key-here&callback=initMap">
</script>
```
You'll see that there is a section of the url that says `your-API-Key-here` - that's because we need to tell Google who we are and show them that we are not abusing their system.

## Get an API key

Head to the [Google Developer Console](https://developers.google.com/maps/documentation/javascript/get-api-key) to get an API key for Google Maps.

Once you've got it, add it in the the API URL in the script tag!
