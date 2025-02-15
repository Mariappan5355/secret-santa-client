import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const FileUpload = () => {
  const [currentYearFile, setCurrentYearFile] = useState<File | null>(null);
  const [previousYearFile, setPreviousYearFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      if (currentYearFile) formData.append('currentYear', currentYearFile);
      if (previousYearFile) formData.append('previousYear', previousYearFile);

      const response = await fetch('http://localhost:3001/api/secret-santa/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to process files');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'SecretSantaAssignments.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-4 w-100 mx-auto mt-4" style={{ maxWidth: '600px' }}>
      <Card.Body>
        <Card.Title className="mb-4">Secret Santa Assignment Generator</Card.Title>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Current Year Employees (CSV)</label>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setCurrentYearFile(e.target.files?.[0] || null)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Previous Year Assignments (CSV)</label>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setPreviousYearFile(e.target.files?.[0] || null)}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading || !currentYearFile}
          >
            {loading ? 'Processing...' : 'Generate & Download CSV'}
          </button>
        </form>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </Card.Body>
    </Card>
  );
};

export default FileUpload;
