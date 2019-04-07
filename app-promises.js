var users=[
{  id:1  ,name:'ahmed'  ,schoolId:101}
,{  id:2  ,name:'mahmoud'  ,schoolId:102}
,{  id:3  ,name:'ali'  ,schoolId:103}];

var grades=[{id:1  ,schoolId:101  ,grade:86}
,{ id:2  ,schoolId:102  ,grade:70}
,{ id:3  ,schoolId:102  ,grade:66}];

// find users by
var getUsers=(id)=>{
  return new Promise(function(resolve, reject) {
    var userRes=users.find((user)=>{ return user.id===id;});
    if (userRes) {
      resolve(userRes);
    } else {
      reject('unable to find user');
    }
  });
};

var getGrades=(schoolId)=>{
  return new Promise(function(resolve, reject) {
    var gradesRes=grades.filter((grade)=>{ return grade.schoolId===schoolId;});
    if (gradesRes) {
      resolve(gradesRes);
    } else {
      reject('unable to find user');
    }
  });
};

var getStatus=(id)=>{
  let user;
  return  getUsers(id).then((temUser)=>{
    user=temUser;
    return getGrades(user.schoolId);

  }).then((grades)=>{
      let avg=0;
      if (grades.length>0) {
        avg=grades.map((grade)=>grade.grade).reduce((a,b)=>a+b) / grades.length;
      }
      console.log('avg',avg);
      return `${user.name} has ${avg} %  in the class`;
      //average
      //return our string
    });
};

getStatus(2).then((user)=>{
  console.log('getStatus',user);
}).catch((e)=>{
  console.log(e);
});
getUsers(2).then((user)=>{
  console.log('result',user);
}).catch((e)=>{
  console.log(e);
});


getGrades(102).then((grades)=>{
  console.log('result grad',grades);
}).catch((e)=>{
  console.log(e);
});
