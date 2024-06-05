    let header = document.querySelector("#header");

    function scrollEvent(){
        window.addEventListener("scroll",function(){
            let sc = window.scrollY;
            let headerY = header.clientHeight;
            console.log(sc);
            if ( sc >= headerY ){
                document.querySelector("h1").classList.add("on");
                header.classList.add("on");
            }else {
                document.querySelector("h1").classList.remove("on");
                header.classList.remove("on");
            }

        });
    }

    //header event
    scrollEvent();


    //mobile gnb 햄버거 버튼
    let gnbBtn = document.querySelector(".gnb_btn");
    let gnb = document.querySelector("#gnb");

    gnbBtn.addEventListener("click",function(){
        gnb.classList.toggle("on");
        
    });


    const recom = document.querySelectorAll(".recom_list li");
        recom.forEach((e,i)=>{
            e.addEventListener("mouseenter",function(){
                recom[i].classList.add("active");

            })
            e.addEventListener("mouseleave",function(){
                recom[i].classList.remove("active");

            })
        })

 