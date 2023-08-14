let proyecto='CAMPO%20VERDE%20III';
const API_URL='https://sistema-avitare.com/api/all_distributions/'+proyecto;
let dataTable;
let dataTableIsInitialized=false;

const dataTableOptions={
    columnDefs:[
        {className:"centered",targets:[0,1,2,3,4,5,6,7]},
    ],
    pageLength:10,
    destroy:true,
    language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
};

const initDataTable=async()=>{
    if(dataTableIsInitialized){
        dataTable.destroy();
    }

    await listUnidades();

    dataTable= $("#dataTable_Unidades").DataTable(dataTableOptions);

    dataTableIsInitialized=true;

}
const listUnidades=async()=>{
    try {
        const response= await fetch(API_URL);
        const unidades= await response.json();
        let content= ``;
        
        unidades.forEach((unidad,index)=>{
            content+=`
                <tr>
                    <td>${index+1}</td>
                    <td>${unidad.code}</td>
                    <td>${unidad.distribution_name_number}</td>
                    <td>${unidad.tower_name}</td>
                    <td>${unidad.level_name}</td>
                    <td>${unidad.around_name}</td>
                    <td>${unidad.project_name}</td>
                    <td>${unidad.status}</td>
                    <td>S/${unidad.cost_soles}</td>
                </tr>
            `;
        });

        tBody_Unidades.innerHTML=content;

    } catch (error) {
        alert(error)
    }
};

window.addEventListener("load",async()=>{
    await initDataTable();
});