import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

// Mock lightweight pages to avoid heavy UI
vi.mock('../pages/Feed', () => ({
  Feed: () => <div>Feed Page</div>,
}));
vi.mock('../pages/Auth', () => ({
  Auth: () => <div>Auth Page</div>,
}));
vi.mock('../components/Layout', () => ({
  Layout: ({ children }: { children: React.ReactNode }) => <div>Layout {children}</div>,
}));

// Prepare auth store mocks
const mockUseAuthStore = (isAuthenticated: boolean) => {
  vi.doMock('../stores/useAuthStore', () => ({
    useAuthStore: () => ({ isAuthenticated }),
  }));
};

describe('ProtectedRoute behavior', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('redirects to /auth when not authenticated', async () => {
    mockUseAuthStore(false);
    const { AppRoutes } = await import('../routes/AppRoutes');

    render(
      <MemoryRouter initialEntries={["/feed"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(await screen.findByText('Auth Page')).toBeInTheDocument();
  });

  it('renders protected content when authenticated', async () => {
    mockUseAuthStore(true);
    const { AppRoutes } = await import('../routes/AppRoutes');

    render(
      <MemoryRouter initialEntries={["/feed"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(await screen.findByText('Feed Page')).toBeInTheDocument();
  });
});
