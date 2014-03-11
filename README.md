-------------------
jukebox mobile app:
-------------------

- auth facebook

- search youtube, send control actions (votes) through socket

---------------------
cloud infrastructure:
---------------------

- write package.json for heroku

- hand off control actions from mobile to host

- save data regarding the following schemas into dynamo:

-- user {fbdata, locations, votes, ... }

-- locations {lat/long, ... }

-- votes {url, user, location, ... }

-------------------------
jukebox chrome extension:
-------------------------

done:

- socket control for soundcloud (ish)

next:

- control youtube playback from socket

- dodge ads