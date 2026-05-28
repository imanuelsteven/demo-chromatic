import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export default function LoanRegister({ onSubmit }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    loanType: 'Personal',
    amount: '',
    term: '12',
    purpose: '',
    monthlyIncome: '',
    employmentStatus: 'Employee',
    address: '',
    dob: '',
    idFile: null
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setForm((p) => ({ ...p, [name]: files[0] ?? null }));
      return;
    }
    setForm((p) => ({ ...p, [name]: value }));
  }

  function validate() {
    if (!form.fullName.trim()) return 'Full name is required.';
    if (!form.email.trim()) return 'Email is required.';
    // simple email pattern
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
    if (!form.phone.trim()) return 'Phone number is required.';
    if (!form.amount || Number(form.amount) <= 0) return 'Amount must be greater than zero.';
    if (!form.loanType) return 'Loan type is required.';
    if (!form.term) return 'Term is required.';
    return '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const maybeError = validate();
    if (maybeError) {
      setError(maybeError);
      return;
    }

    setLoading(true);
    const payload = { ...form };

    // call parent's onSubmit if provided, otherwise log
    Promise.resolve()
      .then(() => {
        if (onSubmit) {
          return onSubmit(payload);
        }
        // fallback: log form data (do not include file contents)
        // create a shallow serializable copy
        const serializable = { ...payload, idFile: payload.idFile ? payload.idFile.name : null };
        console.log('Loan register submit', serializable);
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }

  return (
    <main className="loan-register">
      <h1 className="loan-title">Loan Registration</h1>
      {error && <div className="loan-error" role="alert">{error}</div>}

      <form className="loan-form" onSubmit={handleSubmit} noValidate>
        <div className="loan-row">
          <label className="loan-field">
            <span>Full name</span>
            <input name="fullName" value={form.fullName} onChange={handleChange} className="loan-input" />
          </label>

          <label className="loan-field">
            <span>Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="loan-input" />
          </label>
        </div>

        <div className="loan-row">
          <label className="loan-field">
            <span>Phone</span>
            <input name="phone" value={form.phone} onChange={handleChange} className="loan-input" />
          </label>

          <label className="loan-field">
            <span>Date of birth</span>
            <input name="dob" type="date" value={form.dob} onChange={handleChange} className="loan-input" />
          </label>
        </div>

        <div className="loan-row">
          <label className="loan-field">
            <span>Loan type</span>
            <select name="loanType" value={form.loanType} onChange={handleChange} className="loan-select">
              <option>Personal</option>
              <option>Mortgage</option>
              <option>Auto</option>
              <option>Business</option>
            </select>
          </label>

          <label className="loan-field">
            <span>Amount</span>
            <input name="amount" type="number" min="0" value={form.amount} onChange={handleChange} className="loan-input" />
          </label>
        </div>

        <div className="loan-row">
          <label className="loan-field">
            <span>Term (months)</span>
            <select name="term" value={form.term} onChange={handleChange} className="loan-select">
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
              <option value="48">48</option>
              <option value="60">60</option>
            </select>
          </label>

          <label className="loan-field">
            <span>Employment status</span>
            <select name="employmentStatus" value={form.employmentStatus} onChange={handleChange} className="loan-select">
              <option>Employee</option>
              <option>Self-employed</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        <label className="loan-field">
          <span>Monthly income</span>
          <input name="monthlyIncome" type="number" min="0" value={form.monthlyIncome} onChange={handleChange} className="loan-input" />
        </label>

        <label className="loan-field">
          <span>Purpose</span>
          <textarea name="purpose" value={form.purpose} onChange={handleChange} className="loan-textarea" rows={4} />
        </label>

        <label className="loan-field">
          <span>Address</span>
          <textarea name="address" value={form.address} onChange={handleChange} className="loan-textarea" rows={3} />
        </label>

        <label className="loan-field">
          <span>Upload ID (KTP / ID)</span>
          <input name="idFile" type="file" accept="image/*,application/pdf" onChange={handleChange} className="loan-file" />
        </label>

        <div className="loan-actions">
          <Button type="submit" label={loading ? 'Submitting...' : 'Submit application'} variant="accent" size="md" disabled={loading} />
        </div>
      </form>
    </main>
  );
}

LoanRegister.propTypes = {
  onSubmit: PropTypes.func
};
