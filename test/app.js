var expect = require('chai').expect;
var request = require('getprofile.js');

const userCredentials = {
  email:'aksh@gmail.com',
  password: 'password',
  googleId: 'cn.xender'
}
var authenticatedUser = request().agent(app);
before (function(done)  {
        authenticatedUser.post('/login').send(userCredentials).end(function(err,response){
 expect(response.statusCode).to.equal(200)
expect('Location', '/home');
});
});

describe('GET/Profile',function(done){
  it('should return a 200 response if the user logged in', function(done){
   authenticatedUser.get('/profile').expect(200,done);
  });
  
});

describe('GET/Profile',function(done){
  it('should return a 409 response if the user mail Id or email exist', function(done){
    request(app).get('/profile').expect('/Location','/login').expect(409, done);
  });
});

 describe('GET/Profile',function(done){
  it('should return a 500 response if the user mail Id or email seems wrong', function(done){
    request(app).get('/profile').expect('/Location','/login').expect(500, done);
  });
});
        
                                                                   
        

