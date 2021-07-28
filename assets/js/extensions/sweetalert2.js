document.getElementById('success').addEventListener('click', (e) => {
    Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your operation is already updated!",
    })
})
document.getElementById('error').addEventListener('click', (e) => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "Operation was canceled, please try again!",
    })
})
document.getElementById('warning').addEventListener('click', (e) => {
    Swal.fire({
        icon: "warning",
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonColor: '#d33',
    })
})
document.getElementById('info').addEventListener('click', (e) => {
    Swal.fire({
        icon: "info",
        title: "Info"
    })
})
document.getElementById('question').addEventListener('click', (e) => {
    Swal.fire({
        icon: "question",
        title: "Are you searching for something ?",
        text: "please connect to your internet"

    })
})