### App-Material Module

So this module isn't exactly a visible component of the app.  So maybe it shouldn't be under the app directory?
What about the core?  Well, that kind of makes sense, though that folder is supposed to be for
one-off components and services and we clearly load this module in a bunch of places.

Ideally, I would put this in a shared folder under app/.  But for the scope of this app having:
```
|-- shared
|   |-- app-material
|   |   |-- app-material.module.ts
|   |   |-- README.md
```
With literally nothing else in shared made me decide to just throw this guy under app.
