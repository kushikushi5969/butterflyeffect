import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Form() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [count, setQuantity] = useState(1);
  const [ticketCount, setTicketCount] = useState(1);
  const [error, setError] = useState(null);
  const [nothings, setNothings] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/tickets/tickets');
        const data = await res.json();
        setTicketCount(data.count);

        if (data.count === 0) {
          setNothings(true);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('/api/tickets/updateTickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count }),
      });

      if (!res.ok) {
        throw new Error('Error updating tickets');
      }

      // SSGformへ送信
      if (res.ok) {
        const form = document.createElement('form');
        form.action = "https://ssgform.com/s/514dZ3OR3NNl";
        form.method = "POST";

        const lastNameInput = document.createElement('input');
        lastNameInput.type = 'hidden';
        lastNameInput.name = 'お名前';
        lastNameInput.value = lastName + firstName;
        form.appendChild(lastNameInput);

        const ticketInput = document.createElement('input');
        ticketInput.type = 'hidden';
        ticketInput.name = 'チケット枚数';
        ticketInput.value = count;
        form.appendChild(ticketInput);

        const emailInput = document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = 'メールアドレス';
        emailInput.value = email;
        form.appendChild(emailInput);

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
      } else {
        alert('Failed to update ticket. Please try again.');
      }

      // Re-fetch tickets after update
      const updatedTickets = await res.json();
      router.push('/thanks');
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <p>Error loading tickets: {error.message}</p>;
  }

  if (nothings) {
    return (
      <>
        <p className='p-contact__text'>
          定員枚数に達したため、チケット予約受付は終了いたしました。<br />
          キャンセルが発生した場合は、Mai-kouのXにて随時お知らせいたします。<br />
          <a className='c-link' href='https://twitter.com/sgtppppp'>https://twitter.com/sgtppppp</a>
        </p>
      </>
    );
  } else {

    let options = [];
    if (ticketCount > 2) {
      options = [1, 2, 3];
    } else {
      options = Array.from({ length: ticketCount }, (_, i) => i + 1);
    }

    return (
      <>
        <p className='p-contact__text'>2023年12月2日(土) 18:00-19:00</p>
        <p className='p-contact__text'>登壇：Mai-kou / 吉田結美 (予定)</p>
        <p className='p-contact__text'>チケット：¥2,500 (事前予約制/1ドリンク付き)</p>
        <p className='p-contact__text'>お支払い方法：現金/Paypay(当日受付にてお支払い頂きます)</p>
        <form
          className='p-contact__form'
          onSubmit={handleSubmit}
        >
          <p className='p-contact__text'>お名前</p>
          <input
            className='p-contact__form__name'
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='姓'
            required
          />
          <input
            className='p-contact__form__name'
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='名'
            required
          />

          <p className='p-contact__text'>チケット枚数(お一人様3枚まで)</p>
          <label className='p-contact__form__ticket' htmlFor="ticketNumber">
            <select
              id="ticketNumber"
              name="ticketNumber"
              value={count}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            >
              {options.map((optionValue) => (
                <option key={optionValue} value={optionValue}>
                  {optionValue}
                </option>
              ))}
            </select>
            <span>枚</span>
          </label>

          <p className='p-contact__text'>メールアドレス</p>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input className='p-contact__form__submit' type="submit" value="送信" />
        </form>
      </>
    );
  }

}

export default Form;
