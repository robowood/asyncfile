const posts =[
    {title:'post one' , body:'this is post one'},
    {title: 'post two',body:'this is post two'}
];
function getPosts(){
    setTimeout ( ()=> {
        let output ='';
        posts.forEach((post,index) => {
            output += `<li> ${post.title}</li>`;

        });
        document.body.innerHTML=output;

    },1000)
}
function createPost(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            posts.push(post);
            const error=false;
            if(!error){
                resolve();

            }
            else{
                reject('error: something went wrong')
            }
        },1000);
    });
}
    

function  deletePosts(post){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            
            if(posts.length >0){
                let lastElement=posts.pop();

            resolve(lastElement);
            }else{
            reject("array is empty");
            }
        },3000);
    });
}
// function updateLastUserActivity(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let lastSeen=new Date().getTime();
//             resolve(lastSeen);
//         },1000);
//     })

// }
createPost({ title:'post three',body:'this is post three'})
.then(()=>{
    
    createPost({ title:'post four',body:'this is post three'})
   .then(()=>{
    getPosts();
   
    deletePosts().then(()=>{
        getPosts();
             deletePosts().then(()=>{
              getPosts();
                  deletePosts().then(()=> {
                  getPosts();
                  deletePosts().then(()=> {
                    getPosts();
  
                  deletePosts().then(()=>{ })
                  .catch((err)=>{
                    console.log('inside catch block array is empty' );

                  }).catch(()=>{
                    console.log("array is empty");
                  })
                  })  

            }).catch(()=>{
                console.log("array is empty");
            })
        }).catch(()=>{
            console.log("array is empty");
        })

    }).catch(()=>{
        console.log("array is empty");
      })
   }).catch(err=> console.log(err))
})




//promise all

// function createPost1(post, callback) {
//     setTimeout(()=> {
//         posts.push(post);
//         callback();
//     },2000);
// }
//createPost({ title:'post four',body:'this is post four'},getPosts)

// const promise1=Promise.resolve();
// const promise2=10;

// const promise3=new Promise((resolve,reject)=> 
// setTimeout (resolve,2000,'goodbye'));
// Promise.all([promise1,promise2,promise3]).then(((value)=>console.log(value)));



