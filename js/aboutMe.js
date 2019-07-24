 var personalData = false;
           var expData = false;
           var educationData = false;
           var skillsData = false;
           var langData = false;
        function getRandomColor(){
            var colors = '0123456789ABCDEF'.split('');
            var color = "#";
                for (var i = 0; i < 6; i++)
                    {
                        color+=colors[Math.floor(Math.random() * 16)];
                    }
                return color;
        }
        document.getElementById("personalData").onclick = function(){
            if(personalData == false)
                {
                     document.getElementById("setData").innerHTML = "<p><b>Date birtday: </b><span>25:02:1997</span></p><p><b>Locate: </b><span>Lviv</span></p><p><b>Phone: </b><span>380976681039</span></p><p><b>e-mail: </b><span>epro100live@gmail.com</span></p><p><b>Locate: </b><span>Lviv</span></p>";
                    document.getElementById("setData").style.background = getRandomColor();
                    personalData = true;
                }
            else
            {
                personalData = false;
                document.getElementById("setData").innerHTML = "";
            }
        }
        document.getElementById("experience").onclick = function(){
            if(expData == false)
                {
                    document.getElementById("setExperience").innerHTML = "<p>Work experience is absent. My personal projects on gitHub: <a href='https://github.com/roadstobe?tab=repositories'>my project</a></p>";
                    document.getElementById("setExperience").style.background = getRandomColor();
                    expData = true;
                }
            else
                {
                     document.getElementById("setExperience").innerHTML= "";
                    expData = false;
                }
        } 
        document.getElementById("education").onclick = function(){
            if(educationData == false){
                document.getElementById("setEducation").innerHTML = " <p>study in  IT Step(2018-2020)</p>";
                educationData = true;
                document.getElementById("setEducation").style.background = getRandomColor();
            }
            else
                {
                    document.getElementById("setEducation").innerHTML = "";
                    educationData = false;
                }
        }
        document.getElementById("skills").onclick = function(){
            if(skillsData == false)
                {
                    document.getElementById("setSkills").innerHTML = " <p>C++, C#, good knowledge</p><p> HTML, CSS, JS, SQL, Python basic knowledge</p>";
                    skillsData = true;
                    document.getElementById("setSkills").style.background = getRandomColor();
                }
            else
                {
                    skillsData = false;
                    document.getElementById("setSkills").innerHTML = "";
                }
        }
        document.getElementById("lang").onclick = function(){
           
            if(langData == false)
                {
                    var arrLang = ["Ukraine (native)", "Russian (free)", "English(intermediate)"];
                    var value = "<ol>";
                    for (var i = 0; i < arrLang.length; i++)
                    {
                        value += "<li>" + arrLang[i] +"</li>";
                    }
                    value += "</ol";
                    document.getElementById("setLang").innerHTML = value;
                    document.getElementById("setLang").style.background = getRandomColor();
                    langData = true;
                }
            else
                {
                    document.getElementById("setLang").innerHTML = "";
                    langData = false;
                }
        }