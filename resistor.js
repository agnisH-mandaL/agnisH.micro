
function changeColor1()
{
    let color=document.getElementById("selectColor1");
    let selectedColor=color.options[color.selectedIndex].value;
    document.getElementById("band1").style.backgroundColor=selectedColor;
}

function changeColor2()
{
    let color=document.getElementById("selectColor2");
    let selectedColor=color.options[color.selectedIndex].value;
    document.getElementById("band2").style.backgroundColor=selectedColor;
}

function changeColor3()
{
    let color=document.getElementById("selectColor3");
    let selectedColor=color.options[color.selectedIndex].value;
    document.getElementById("band3").style.backgroundColor=selectedColor;

}

function changeColor4()
{
    let color=document.getElementById("selectColor4");
    let selectedColor=color.options[color.selectedIndex].value;
    document.getElementById("band4").style.backgroundColor=selectedColor;
}
function Resistance()
{
    let band1=document.getElementById("selectColor1");
    let band2=document.getElementById("selectColor2");
    let band3=document.getElementById("selectColor3");
    let band4=document.getElementById("selectColor4");
    let color1=band1.options[band1.selectedIndex].textContent;
 
    let color2=band2.options[band2.selectedIndex].textContent;
    let color3=band3.options[band3.selectedIndex].textContent;
    let color4=band4.options[band4.selectedIndex].textContent;
    let r1=color1.slice(0,1);
    let r2=color2.slice(0,1);
    let r3;
    let r4;
    let R_;
    if (color3=="Gold"){r3=-1;
    }
    else if(color3=="Silver"){r3=-2;
    }
    else{
        r3=color3.slice(0,1);
    }
    if (color4=="Gold"){
        r4=" 5%";
    }
    else{
        r4=" 10%";
    }
    let R3=Number(r3);
    let r=r1+r2;
    let R=Number(r)*(10**R3);
    if (R%10**9==0){R_= (R/10**9).toString()+"G";}
    else if (R%10**6==0){R_= (R/10**6).toString()+"M";}
    else if (R%10**3==0){R_= (R/10**3).toString()+"k";}
    else{R_=R}
    
    let Res=R.toString()+r4;
    let Res_=R_.toString()+r4;
    document.getElementById("output").textContent = Res;
    document.getElementById("output2").textContent = Res_;
}
