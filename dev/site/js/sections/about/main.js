console.log('-- about loaded --');

define(['../AbstractSection'], function(AbstractSection) {

    // note that this module could be described on the "sections" as
    // {
    //   id : 'about',
    //   route : 'about/:id:',
    //   moduleId : 'sections/AbstractSection2',
    //   params : [
    //     'About'
    //   ]
    // }
    // if module is a function it will be treated as a constructor
    //
    // since the route accepts different parameters and we want to handle logic
    // internally it is "better" to have a static module which will be called
    // all the times passing different parameters on the `init()` method,
    // otherwise constructor would be called every single time creating a new
    // object.

    return new AbstractSection('About');

});
