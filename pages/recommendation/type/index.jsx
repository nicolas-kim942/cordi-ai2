// pages/recommendation/[type]/index.jsx

import React from 'react';

const dummyRecommendations = [
  {
    id: 1,
    title: '미니멀 코디',
    description: '심플하고 깔끔한 스타일의 미니멀 코디입니다.',
    image:
      'https://images.unsplash.com/photo-1602810311527-01a9e38b9f7e?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.musinsa.com/app/goods/123456',
  },
  {
    id: 2,
    title: '스트릿 패션',
    description: '자유롭고 개성 있는 스트릿 무드의 스타일.',
    image:
      'https://images.unsplash.com/photo-1614285469734-9471be350e94?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.musinsa.com/app/goods/789101',
  },
];

export default function RecommendationTypePage() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2">
      {dummyRecommendations.map((item) => (
        <div
          key={item.id}
          className="border rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-blue-500 hover:underline"
          >
            관련 상품 보러가기 →
          </a>
        </div>
      ))}
    </div>
  );
}
