import authors from '../models/Author.js'

class AuthorController {

    static getAuthores(req, res) {
        authors.find((err, authors) => {
            res.status(200).json(authors);
        })
    }

    static getAuthorById = (req, res) => {
        const id = req.params.id;

        authors.findById(id, (err, authors) => {
            {
                if (err) {
                    res.status(400).send({ message: `${err.message} = Id of the author not found` })

                } else {
                    res.status(200).send(authors)
                }
            }
        })
    }

    static registerAuthor = (req, res) => {
        let author = new authors(req.body);
        author.save(err => {

            if (err) {
                res.status(500).send({ message: `${err.message} = Fail to register authors` })
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static toUpdateAuthors = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, { set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'authors updated successfully' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static toDeleteAuthors = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'authors deleted successfully' })

            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default AuthorController