### Models

To Interface or to Class?

But is that the question?  The "more correct" way of setting this up, would probably be to setup interfaces and then 
have classes implement those.  So I was cutting some corners here, this let me use the models for the http generics and
to instantiate the classes.  In the real world I'd probably be implementing an ORM, like BreezeJS, so I would have
interfaces that the breeze model definitions would be implementing.  But bringing in Breeze would be serious overkill 
here, and would not be nearly as easy to implement as adding some file structure(see parent README for context).
