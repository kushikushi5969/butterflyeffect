import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function controller() {
  const [operation, setOperation] = useState('');
  const [count, setCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(1);
  const [error, setError] = useState(null);
  const stylesAdmin = {
    height: '100vh',
    padding: '30px',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/tickets/tickets');
        const data = await res.json();
        setTicketCount(data.count);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('/api/tickets/adminTickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ operation, count }),
      });

      if (!res.ok) {
        throw new Error('Error updating tickets');
      }

      // Re-fetch tickets after update
      const data = await res.json();
      setTicketCount(data.count);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <p>Error loading tickets: {error.message}</p>;
  }

  let maxtickets = 25 - ticketCount;

  return (
    <>
      <Head>
        <title>管理画面｜BUTTERFLY EFFECT</title>
        <link rel="icon" href="/favicon-butterflyeffect.png" />
      </Head>

      <main className="l-lp">
        <div className='p-admin' style={stylesAdmin}>
          <h1 className='p-contact__title'>管理画面</h1>
          <p className='p-contact__text'>チケット枚数：{ticketCount}</p>

          <form
            className='p-contact__form'
            onSubmit={handleSubmit}
          >
            <p className='p-contact__text'>【調整内容】</p>
            <label style={{ marginRight: '20px' }}>
              <input
                type="radio"
                name="operation"
                value="increase"
                checked={operation === 'increase'}
                onChange={e => setOperation(e.target.value)}
                required
                style={{ marginBottom: 'unset', width: 'unset', marginRight: '10px' }}
              />
              加算
            </label>

            <label>
              <input
                type="radio"
                name="operation"
                value="decrease"
                checked={operation === 'decrease'}
                onChange={e => setOperation(e.target.value)}
                required
                style={{ marginBottom: 'unset', width: 'unset', marginRight: '10px' }}
              />
              減算
            </label>

            <p className='p-contact__text'>【調整枚数】</p>
            <input
              className='p-contact__form__name'
              type="number"
              id="count"
              name="count"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              required
              min="0"
              max={maxtickets || 1}
              style={{ width: '130px' }}
            />

            <input className='p-contact__form__submit' type="submit" value="送信" />
          </form>

          <p className='p-contact__text'><a className='c-link' href='/'>TOPへ</a></p>
          <p className='p-contact__text'><a className='c-link' href='/contact'>contactへ</a></p>
        </div>
      </main>
    </>
  );
}
