from django.conf.urls import patterns, include, url

from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    # This is our new URL
    url(r'^example/$', 'angular_example.views.example', name="example"),
    url(r'^$', 'baseclone.views.index', name="index"),
    # Your basecamp id comes from https://basecamp.com/2271903/projects/6766732
    url(r'^proxy/(?P<path>.*)$', 'baseclone.views.proxy_to', {'target_url': 'https://basecamp.com/2784482/api/v1/'}),
)
