function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }

  var id = generateID();

function manageStudent(name) {
    return {
    add: add,
    list: [],
    display: display,
    displaystudents:displaystudents,
    name,
    };
  }

function add(name, secondname, age, grade, gender, images){
    var student= makestudent(name, secondname, age, grade, gender, images)
     this.list.push(student)
    return this.list
   }
function makestudent (name, secondname, age, grade, gender, images) {
    var data = {
      name: name,
      secondname: secondname,
      age: age,
      grade: grade,
      gender: gender,
      images: images,
      date: new Date().toLocaleString(),
      id: id(),
    }
  
    return data
  }

 
   var students = manageStudent("La La Land university");

 
  students.add("Ashley", "Funicello", "10 years old" , "5th grade", "female" ,[
    "https://i.pinimg.com/originals/aa/13/42/aa1342e1aab97c9ad7d36820614a4150.png",
    "https://static.wikia.nocookie.net/recess/images/b/ba/Spinelli_%282%29.png"
  ]);
  
  students.add("Gretchen", " Grundler", "11 years old" , "5th grade", "female" ,[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7A8C4KHKkr79aFIA3QwsBN1xfVEXX2CTD0R1gooeRQLaZ0--zlIAUpZMNkj2fljDhsKI&usqp=CAU",
    "https://static.wikia.nocookie.net/recess/images/6/6e/Character_gretchen.jpg"
  ]);
  
  
  students.add("T.J", " Detweiler", "9 years old" ,"4th grade" , "male",[
    "https://static.wikia.nocookie.net/disney/images/e/e1/Profile_-_T.J._Detweiler.jpg",
    "https://chumley.barstoolsports.com/wp-content/uploads/2019/04/11/133a2fd275036131-822x617.png",
  ]);

  students.add("Theresa Laverne ", " LaMaise", "8 years old" , "6th grade", "female",[
    "https://static.wikia.nocookie.net/recess/images/0/0e/Cg.png",
    "https://static.wikia.nocookie.net/disneysrecess/images/8/80/Cornchip_Girl.png",
  ]);

  students.add("Mundy ", "Conrad", "11 years old" , "4th grade" ,"male",[
    "https://static.wikia.nocookie.net/recess/images/6/66/Conrad_Mundy.png",
    "https://i.ytimg.com/vi/tOmEiHkDqzU/mqdefault.jpg",
  ]);

  students.add("Randall", " J. Weems ", "10 years old" , "5th grade" ,"male",[
    "https://static.miraheze.org/loathsomecharacterswiki/8/8b/Randall_weems.jpg",
    "https://static.wikia.nocookie.net/disney/images/4/40/RandallWeems.jpg",
  ]);

  students.add("Michael", " Robert Blumberg", "9 years old" , "5th grade" ,"male",[
    "https://static.wikia.nocookie.net/disneyfanon/images/8/89/Profile_-_Mikey_Blumberg.jpeg",
    "https://pbs.twimg.com/media/EQ8WHrrUcAAgImq.jpg",
  ]);
  students.add("Gustav", " Patton Griswald", "9 years old" , "6th grade" ,"male",[
    "https://i.pinimg.com/originals/f1/06/74/f10674adda279197ba80a586bd835110.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51368247-0c1e-4e48-8ba2-8bc0e076fe5c/deghs82-97975414-1f47-4964-a5d3-802dc3abc870.png/v1/fill/w_1280,h_1841/recess___i_don_t_know_you__gus_griswald__by_shurikenpink_deghs82-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg0MSIsInBhdGgiOiJcL2ZcLzUxMzY4MjQ3LTBjMWUtNGU0OC04YmEyLThiYzBlMDc2ZmU1Y1wvZGVnaHM4Mi05Nzk3NTQxNC0xZjQ3LTQ5NjQtYTVkMy04MDJkYzNhYmM4NzAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NdMIdpyQWkErruap3NdyV05fDIegKVOYjhEi2O_FTvg",
  ]);
  students.add("Vincent ", " Pierre LaSalle", "9 years old" , "5th grade" ,"male",[
    "https://media.licdn.com/dms/image/C4E03AQFXVW1IcWZaJg/profile-displayphoto-shrink_200_200/0/1517062558689?e=1697673600&v=beta&t=Li-nJpkmkr9dPBQ5hdkqtJKfmEeu3Gn2wEdfJ68CEfE",
    "https://static.wikia.nocookie.net/recess/images/0/0d/Vince_%283%29.jpg",
  ]);



function display(item) {
  
    var id = item.id;
    $("#students").append(`
    <div class="Card"  id = item${id}>
      <img class = image id = image${id} src=${item.images[0]} alt= ${item.images[1]} />
      <h2 class = fullname1 id = fullname${id}>${item.name} ${item.secondname}</h2>
      <p class="pclass" id = age${id}>${item.age}</p>
      <p  class="pclass" id = gender${id}>${item.gender}</p>
      <p  class="pclass" id = grade${id}>${item.grade}</p>
    </div>
    `);
  }

 
function displaystudents() {
    $("#students").empty();
    for (var i = 0; i < this.list.length; i++) {
       display(this.list[i]);
    }
  }
 
  students.displaystudents()

 
$(".image").click(function () {
    var id = this.id;
    console.log(id);
    var src = this.src;
    var alt = this.alt;
    $(`#${id}`).attr("src", alt);
    $(`#${id}`).attr("alt", src);
  });

   
   
$("#sel1").change(function(){
    var selgender= $("#sel1").val()
    var filter1 = students.list.filter(function(element){
       return element.gender ===selgender
    })

$("#students").empty();
filter1.forEach(function (item) {
  display(item);
});
});


$("#sel2").change(function(){
    var aaage= $("#sel2").val()
    var filter2 = students.list.filter(function(element){
       return element.age === aaage   
    })

$("#students").empty();
filter2.forEach(function (itemss) {
  display(itemss);
});
});


$("#sel3").change(function(){
    var gradeee= $("#sel3").val()
    var filter3 = students.list.filter(function(element){
       return element.grade === gradeee   
    })

$("#students").empty();
filter3.forEach(function (itemss) {
  display(itemss);
});
});

$("#butt").on("click", function () {
  var value = $(".input").val();
  var filter4 = students.list.filter(function (element) {
    return element.name.toLowerCase().includes(value.toLowerCase());
  });
  $("#students").empty();
  filter4.forEach(function (item) {
    display(item);
  });
});