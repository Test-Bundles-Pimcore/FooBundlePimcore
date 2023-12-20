<?php

namespace TestBundlesPimcore\PimcoreFooBundle\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends FrontendController
{
    /**
     * @Route("/test_bundles_pimcore_pimcore_foo")
     */
    public function indexAction(Request $request): Response
    {
        return new Response('Hello world from test_bundles_pimcore_pimcore_foo');
    }
}
