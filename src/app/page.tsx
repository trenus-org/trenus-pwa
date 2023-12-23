'use client'
import { Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed', platform: string }>;
  prompt(): Promise<void>;
}

export default function Home() : JSX.Element{
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
useEffect(() => {
  const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
    // Previne o prompt padrão do navegador
    e.preventDefault();
    // Salva o evento para que possa ser acionado mais tarde
    setInstallPrompt(e);
  };

  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as any);

  return () => {
    window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as any);
  };
}, []);

const handleInstallClick = () => {
  if (installPrompt) {
    installPrompt.prompt();

    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação do A2HS');
      } else {
        console.log('Usuário recusou a instalação do A2HS');
      }
      setInstallPrompt(null);
    });
  }
};

  return (<main>
     {installPrompt && (
      <button onClick={handleInstallClick}>
        Instalar Aplicativo
      </button>
    )}
    <div>
    <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
      About
    </Link>
    <Text fontSize="6xl">Hello World</Text>
      </div>
    </main>
  )
}
