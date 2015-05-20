// ==UserScript==
// @name        Neoquest Attack
// @namespace   Jarofgrease.captainmaxthecat.com
// @description 
// @author 		Demeiz
// @email 		admin@captainmaxthecat.com
// @homepage	http://www.captainmaxthecat.com
// @version		0.1
// @language	en
// @include     http://www.neopets.com/games/neoquest/*
// @exclude     http://www.neopets.com/games/neoquest/neoquest.phtml?action=items
// @exclude     http://www.neopets.com/games/neoquest/neoquest.phtml?action=talk&target=*
// @exclude     http://www.neopets.com/games/neoquest/neoquest.phtml?action=skill*
// @grant		none
// ==/UserScript==

var neoquest=document.body.innerHTML.split('NeoQuest is brought to you by')[1];
var health=eval(neoquest.split('Health: <b>')[1].split(' <img')[0].replace('</b>',''));
if(neoquest.search('to see what you found')!=-1){

	location.href='http://www.neopets.com/games/neoquest/neoquest.phtml';

}

for(i=0;i<document.forms.length;i++){
               
    if(document.forms[i].elements[0].value=="Click here to return to the map"){

                         document.forms[i].submit();
    }
}
/*
if(neoquest.search('navarrows.gif')!=-1){

	location.href='http://www.neopets.com/games/neoquest/neoquest.phtml?action=move&movedir=';
	
}
*/
if(neoquest.search('to begin the fight')!=-1){

	location.href='http://www.neopets.com/games/neoquest/neoquest.phtml';

}


if(health<(0.5)&&((neoquest.search('Spirit of Growth')!=-1)||(neoquest.search('Healing Potion')!=-1))){

	if(neoquest.search('Spirit of Growth')!=-1){
				 	
		location.href="javascript:setdata('special',200019);";

	}else if(neoquest.search('Healing Potion')!=-1){
		 
		 location.href="javascript:setdata('item', 220001);";//replace with pot id
		 /* Pot IDs:
Weak HP: 220000
Standard HP: 220001
Strong HP: 220002
Greater HP: 220003
Superior HP: 220004
Spirit HP: 220005
         */
	}
}else if(neoquest.search('Cast Absorption')!=-1){

	location.href="javascript:setdata('special', 4003)";
	
}else if(neoquest.search('Attack')!=-1){

	location.href="javascript:setdata('attack', 0);";

}else if(neoquest.search('Do nothing')!=-1){

	location.href="javascript:setdata('noop', 0);";
	
}
