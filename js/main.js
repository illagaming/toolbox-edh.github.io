function recupId(clicked_id)
{     
          
     var idinfo = document.getElementById(clicked_id);

     var tools = document.getElementById('tools');  
     var tuto = document.getElementById('tuto');
     var good = document.getElementById('good-to-do');

     tools.style.display = 'none';
     tuto.style.display = 'none';
     good.style.display = 'none';
     
     if (idinfo.style.display == 'none')
     {
          idinfo.style.display = 'block';       
     }
     else
     {
          idinfo.style.display = 'none';
     }     
}




