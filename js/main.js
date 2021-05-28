function recupId(clicked_id)
{       
     var idinfo = document.getElementById(clicked_id);
     alert(idinfo);

     if (idinfo.style.display == 'none')
     {
          idinfo.style.display = 'block';       
     }
          else
     {
          idinfo.style.display = 'none';
     }     
}




