'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [adminSecret, setAdminSecret] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/admin/messages', {
        headers: {
          'Authorization': `Bearer ${adminSecret}`
        }
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          setError('Invalid admin secret');
          setIsAuthenticated(false);
          return;
        }
        throw new Error('Failed to fetch messages');
      }
      
      const data = await response.json();
      setMessages(data);
      setIsAuthenticated(true);
    } catch (err) {
      setError('Error fetching messages');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMessages();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {!isAuthenticated ? (
        <Card className="p-6 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Authentication Required</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="adminSecret" className="block text-sm font-medium mb-1">
                Admin Secret
              </label>
              <Input
                id="adminSecret"
                type="password"
                value={adminSecret}
                onChange={(e) => setAdminSecret(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </Card>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Messages</h2>
            <Button onClick={fetchMessages} disabled={loading}>
              {loading ? 'Loading...' : 'Refresh'}
            </Button>
          </div>
          
          {loading ? (
            <p>Loading messages...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : messages.length === 0 ? (
            <p>No messages found.</p>
          ) : (
            <div className="grid gap-4">
              {messages.map((message) => (
                <Card key={message._id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{message.name}</h3>
                      <p className="text-sm text-gray-500">{message.email}</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(message.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <p className="mt-2">{message.message}</p>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
} 