// console.log('person1:show ticket');
// console.log('person2:show ticket');
// const promiseWifeBringTicks= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });
// const getPopcorn= promiseWifeBringTicks.then((t)=>{
//     console.log(" wife: i have ticket");
//  console.log('husband: we should go in');
//  console.log('wife:no i am hungry');
//  return new Promise((resolve,reject)=> resolve(`${t} popcorn`));
 
// });
// const getButter= getPopcorn.then((t)=> {
//     console.log('husband: i have a some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife : i need butter on my popcorn');
//     return new Promise((resolve,reject)=> resolve(`${t} butter`));
// });
// const getColdDrinks=getButter.then((t)=>{
//     console.log('husband: you want coldDrink');
//     console.log('wife : ya');
//     return new Promise((resolve,reject)=> resolve(`${t}  coldDrinks`));
// })
// getColdDrinks.then((t) => console.log(`${t}`));
// console.log('person4:show ticket');
// console.log('person5:show ticket');



//  using async await
// console.log('person1:show ticket');
// console.log('person2:show ticket');
//  const preMovie= async()=>{
// const promiseWifeBringTicks= new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              resolve('ticket');
//          },3000)
//      });
// const getPopcorn = new Promise((resolve ,reject)=> resolve('popcorn'));
// const getButter = new Promise((resolve ,reject)=> resolve('butter'));
// const getColdDrinks=new Promise((resolve,reject)=>resolve('coldDrinks'));
//      let ticket=await promiseWifeBringTicks;
     
//      console.log(" wife: i have ${ticket}");
//   console.log('husband: we should go in');
//   console.log('wife:no i am hungry');
//   let popcorn = await getPopcorn;
  
//     console.log('husband: i have a some ${popcorn}');
//     console.log('husband: we should go in');
//     console.log('wife : i need butter on my popcorn');

//     let butter= await getButter;
//     console.log('husband:  i got some ${butter} on my popcorn');

//     let coldDrinks= await getColdDrinks;
//     console.log (' husband: you want coldDrinnks');
//     console.log('wife: ya');
//     return ticket;
//     }
//     preMovie().then((m)=> console.log(`person3: shows${m}`));
// console.log('person4:show ticket');
// console.log('person5:show ticket');


// promise all
//  console.log('person1:show ticket');
//  console.log('person2:show ticket');

// const preMovie= async()=>{
//     const promiseWifeBringTicks= new Promise((resolve,reject)=>{
//              setTimeout(()=>{
//                  resolve('ticket');
//              },3000)
//          });
// const getPopcorn = new Promise((resolve ,reject)=> resolve('popcorn'));
// const getButter = new Promise((resolve ,reject)=> resolve('butter'));
// const getColdDrinks=new Promise((resolve,reject)=>resolve('coldDrinks'));

// let ticket = await promiseWifeBringTicks;
// let [popcorn,butter,coldDrinks]= await Promise.all([getPopcorn,getButter,getColdDrinks]);
// console.log(`${popcorn}, ${butter} ,${ coldDrinks}`);
// return ticket;
//  }

//  preMovie().then((m)=> console.log(`person3: shows${m}`));

//  console.log('person4:show ticket');
//  console.log('person5:show ticket');



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

async function getData(){
     const get= await getPosts();
     console.log(get);
     const delet=await deletePosts();
     console.log(delet);
     
}

