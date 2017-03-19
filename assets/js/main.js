var images = [
    "https://images.unsplash.com/photo-1456412684996-31507d7d17b6?dpr=1&auto=compress,format&fit=crop&w=376&h=297&q=80&cs=tinysrgb&crop=",
    "https://images.unsplash.com/photo-1486590075932-b7fce436c9d5?dpr=1&auto=compress,format&fit=crop&w=376&h=251&q=80&cs=tinysrgb&crop=",
    "https://images.unsplash.com/photo-1488986323782-e402cbff3a7a?dpr=1&auto=compress,format&fit=crop&w=376&h=251&q=80&cs=tinysrgb&crop=",
    "https://images.unsplash.com/photo-1447706140685-aac3d804acf4?dpr=1&auto=compress,format&fit=crop&w=376&h=249&q=80&cs=tinysrgb&crop=",
    "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?dpr=1&auto=compress,format&fit=crop&w=376&h=251&q=80&cs=tinysrgb&crop="
];

var gallery = document.getElementById("gallery");
var galleryLoaded = false;
window.addEventListener("scroll", function(){
    if (window.scrollY > 200 && !galleryLoaded){
        galleryLoaded = true;
        setTimeout(function(){
            for(var i=0; i < images.length; i++){
                var tab = document.createElement("Div");
                tab.classList.add("gallery-img");
                tab.style.background = "url(" + images[i] +  ") no-repeat";
                gallery.append(tab);
                tab.animate([
                    {
                        backgroundSize: '0%',
                        backgroundPosition: "center"
                    },
                    {
                        backgroundSize: "100%",
                        backgroundPosition: "center"
                    }
                ], 500);
                tab.style.backgroundSize = "100%";
            }
        }, 500)
    }
})
