// alert("hello")



let data = JSON.parse(localStorage.getItem('notes')) || []

function displayNote(){
    // document.getElementById("allNote").innerHTML = ''
    data.map((singleNote) => {

        if(singleNote){
            addNote(singleNote);
        }
        
    })
}

displayNote();


document.getElementById('btn').addEventListener('click', ()=>{
    
    addNote();

    // div.innerHTML = txtA.value;
    // txtA.classList.toggle('hidden');
    // div.classList.toggle('hidden');
})



function addNote(note = ''){
    // console.log(note);

    let divEle = document.createElement('div');
    divEle.setAttribute('class', 'singleNote');
    let date = new Date().toLocaleString()
    divEle.innerHTML = `

    <div>
        <button class="editBtn"> <span class = "edit ${note ? '': 'hidden' }"> Edit </span> <span class = "save ${note ? 'hidden' : ''}"> Save </span> </button>
        <button class="removeBtn">Remove</button>
    </div>

    <div>
        <div class="note ${note ? '': 'hidden' }" id="div"></div>
        <textarea class="note textarea ${note ? 'hidden' : ''}" name="" id="txtA" ></textarea>
    </div>

    <div class="date">${date}</div>

`;

    let editBtn = divEle.querySelector(".editBtn");
    let txtA = divEle.querySelector('#txtA');
    let div = divEle.querySelector('#div');
    let removeBtn = divEle.querySelector(".removeBtn");
    let save = divEle.querySelector(".save");
    let edit = divEle.querySelector(".edit");

    txtA.innerHTML = note;
    div.innerHTML = note; 

    editBtn.addEventListener("click", ()=>{
        div.innerHTML = txtA.value;
        txtA.classList.toggle('hidden');
        div.classList.toggle('hidden');
        edit.classList.toggle('hidden');
        save.classList.toggle('hidden');
    });

    removeBtn.addEventListener('click', (e)=>{
        // console.log(e.target.parentNode.parentNode)
        e.target.parentNode.parentNode.remove();
        updateStorage();
        // divEle.remove() both are work same in remove note
    })

    txtA.addEventListener('input' ,() => {
        // console.log(e.target.value);
        updateStorage();
    })

    document.getElementById('allNote').append(divEle);
    
}

function updateStorage(){
    let textArea = document.querySelectorAll('textarea');
    data = []
    textArea.forEach(e =>{

        if(e){
            data.push(e.value)
        }
        
    });

    localStorage.setItem('notes' , JSON.stringify(data))

}

updateStorage();