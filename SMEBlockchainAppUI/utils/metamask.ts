import { ethers } from 'ethers'

export async function connectMetamask() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      
      // Get provider
      const provider = new ethers.BrowserProvider(window.ethereum)
      
      // Get signer
      const signer = await provider.getSigner()
      
      return {
        success: true,
        account: accounts[0],
        signer
      }
    } catch (error) {
      return {
        success: false,
        error: 'Failed to connect to Metamask'
      }
    }
  } else {
    return {
      success: false,
      error: 'Please install Metamask'
    }
  }
}

