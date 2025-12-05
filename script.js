
//wait for page to load
document.addEventListener('DOMContentLoaded',function(){
    console.log('Script loaded!');
    //find all design titles
    const designTitles=document.querySelectorAll('.design-title');
    console.log('Found titles:', designTitles.length);

    //add click listener to each title
    designTitles.forEach(function(title){
        title.addEventListener('click',function(){
            console.log('Title clicked!');
            const description=this.nextElementSibling;

            description.classList.toggle('open');
        });
    });
});