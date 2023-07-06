'use client'

export default function ContactPage() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string }
      title: { value: string }
      message: { value: string }
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email: target.email.value, title: target.title.value, message: target.message.value }),
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <>
      <h1 className="text-2xl mb-2">Contact</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">이메일</label>
        </p>
        <input type="email" name="email" id="email" className="w-full text-gray-700" required />
        <p>
          <label htmlFor="title">제목</label>
        </p>
        <input type="text" name="title" id="title" className="w-full text-gray-700" required />
        <p>
          <label htmlFor="message">메세지</label>
        </p>
        <textarea name="message" id="message" className="w-full text-gray-700" required />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-2">
          submit
        </button>
      </form>
    </>
  )
}
