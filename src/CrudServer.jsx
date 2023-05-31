import React, { useEffect, useState } from 'react'

const CrudServer = () => {
    const [post, setPost] = useState([])
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [editData, setEditData] = useState(null)

    const fetchPost = async function () {
        const getData = await fetch('http://localhost:3000/posts')
        const response = await getData.json()
        setPost([...response])
    }

    const fetchDelete = async function (index) {
        const getDelete = await fetch(`http://localhost:3000/posts/${index}`,
            { method: 'DELETE' })
        fetchPost()
    }

    const fetchEditClick = async function (index) {
        const dataToEdit = post.find((item) => item.id === index);
        setEditData(dataToEdit.id);
        setTitle(dataToEdit.title);
        setAuthor(dataToEdit.author);
    }

    const onButtonSubmit = async function () {
        if (editData === null) {
            let newData = {
                id: post.id + 1,
                title: title,
                author: author
            }
            const getCreate = await fetch('http://localhost:3000/posts',
                {
                    method: 'POST', body: JSON.stringify(newData),
                    headers: { 'Content-type': 'application/json; charset=UTF-8', },
                })
            fetchPost()
        } else {
            let updatedPost = {
                title: title,
                author: author
            }
            const getEdit = await fetch(`http://localhost:3000/posts/${editData}`,
                {
                    method: 'PUT', body: JSON.stringify(updatedPost),
                    headers: { 'Content-type': 'application/json; charset=UTF-8', },
                })
            fetchPost()
        }
      }

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div>CrudServer
            <form>
                <label>Title : </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label>Author : </label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <br />
                <br />
                <button type="button" onClick={onButtonSubmit} >SAMBIT</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Response</td>
                    </tr>
                </thead>
                <tbody>
                    {post.map((x, index) => {
                        return (
                            <tr key={index}>
                                <td>{x.id}</td>
                                <td>{x.title}</td>
                                <td>{x.author}</td>
                                <td><button onClick={() => fetchDelete(x.id)}>Delete</button></td>
                                <td><button onClick={() => fetchEditClick(x.id)}>Edit</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default CrudServer